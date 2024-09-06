import { authenticateUser } from "@/actions/authenticate-user";
import { cn } from "@hub/utils";
import Link from "next/link";
import { Suspense } from "react";
import { UserAuthFormFallback } from "@hub/shadcn-ui/fallbacks/user-auth-form-fallback";
import { UserAuthForm } from "@hub/shadcn-ui/forms/user-auth-form";
import { Icons } from "@hub/shadcn-ui/icons";
import { buttonVariants } from "@hub/shadcn-ui/ui/button";

export const metadata = {
  title: "Create an account",
  description: "Create an account to get started.",
};

export default async function RegisterPage() {
  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/login"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8",
        )}
      >
        Login
      </Link>
      <div className="hidden h-full bg-muted lg:block">
        <Icons.CircleChevronRight className="mx-auto h-full w-1/2" />
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Icons.CircleChevronRight className="mx-auto h-6 w-6" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <Suspense fallback={<UserAuthFormFallback />}>
            <UserAuthForm signIn={authenticateUser} />
          </Suspense>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="hover:text-brand underline underline-offset-4"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="hover:text-brand underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
