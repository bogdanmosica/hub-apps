"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type * as z from "zod";
import { cn } from "@hub/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "../ui/use-toast";
import { buttonVariants } from "../ui/button";
import { loginUserAuthSchema } from "../../lib/validations/auth";
import { Icons } from "../icons";
// import { signIn } from '../../lib/session';
//import useMainStoreContext from '../../hooks/use-main-store-context';

type LoginUserAuthProps = React.HTMLAttributes<HTMLDivElement>;

type FormData = z.infer<typeof loginUserAuthSchema>;

export function LoginUserAuthForm({
  className,
  ...props
}: LoginUserAuthProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginUserAuthSchema),
  });
  //const { setIsUserAuthenticated, setUser } = useMainStoreContext();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  function onSubmit(data: FormData): void {
    setIsLoading(true);

    // const signInResult = await signIn('email', {
    //   email: data.email.toLowerCase(),
    //   password: data.password,
    // });
    const signInResult = { ok: true };

    setIsLoading(false);

    if (!signInResult.ok) {
      toast({
        title: "Something went wrong.",
        description: "Your sign in request failed. Please try again.",
        variant: "destructive",
      });
    }

    // setIsUserAuthenticated(signInResult?.ok);
    // setUser((state) => ({
    //   ...state,
    //   email: data.email.toLowerCase(),
    // }));
    router.push(`/${searchParams.get("from") || "dashboard"}`);
    toast({
      title: "Succes", // <ToastIcon type="succes" />,
      description: "You successfully logged in.",
    });
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              id="email"
              placeholder="name@example.com"
              type="email"
              {...register("email")}
            />
            {errors?.email ? (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            ) : null}
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              id="password"
              placeholder="Password"
              type="password"
              {...register("password")}
            />
            {errors?.password ? (
              <p className="px-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            ) : null}
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            Sign In with Email
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <button
        className={cn(buttonVariants({ variant: "outline" }))}
        disabled={isLoading || isGitHubLoading}
        onClick={() => {
          setIsGitHubLoading(true);
          //signIn('github', {});
        }}
        type="button"
      >
        {isGitHubLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </button>
    </div>
  );
}
