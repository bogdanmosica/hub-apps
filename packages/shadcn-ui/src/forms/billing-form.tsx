"use client";

import type { UserSubscriptionPlan } from "@hub/types";
import { cn, formatDate } from "@hub/utils";
import type { FormEvent, HTMLAttributes } from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Icons } from "../icons";
import { toast } from "../ui/use-toast";
import { buttonVariants } from "../ui/button";

interface BillingFormProps extends HTMLAttributes<HTMLFormElement> {
  subscriptionPlan: UserSubscriptionPlan & {
    isCanceled: boolean;
  };
}

export function BillingForm({
  subscriptionPlan,
  className,
  ...props
}: BillingFormProps): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function onSubmit(event: FormEvent): void {
    event.preventDefault();
    setIsLoading(!isLoading);

    // Get a Stripe session URL.
    fetch("/api/users/stripe")
      .then((response) => {
        if (!response.ok) {
          toast({
            title: "Something went wrong.",
            description: "Please refresh the page and try again.",
            variant: "destructive",
          });
        } else {
          return response.json();
        }
      })
      .then((session) => {
        if (session) {
          //window.location.href = session.url;
        }
      })
      .catch((error: Error) => {
        toast({
          title: "Something went wrong.",
          description: error.message,
          variant: "destructive",
        });
      });
  }

  return (
    <form className={cn(className)} onSubmit={onSubmit} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Subscription Plan</CardTitle>
          <CardDescription>
            You are currently on the <strong>{subscriptionPlan.name}</strong>{" "}
            plan.
          </CardDescription>
        </CardHeader>
        <CardContent>{subscriptionPlan.description}</CardContent>
        <CardFooter className="flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-x-0">
          <button
            className={cn(buttonVariants({ variant: "default" }))}
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? (
              <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            {subscriptionPlan.isPro ? "Manage Subscription" : "Upgrade to PRO"}
          </button>
          {subscriptionPlan.isPro ? (
            <p className="rounded-full text-xs font-medium">
              {subscriptionPlan.isCanceled
                ? "Your plan will be canceled on "
                : "Your plan renews on "}
              {formatDate(subscriptionPlan.stripeCurrentPeriodEnd ?? "")}.
            </p>
          ) : null}
        </CardFooter>
      </Card>
    </form>
  );
}