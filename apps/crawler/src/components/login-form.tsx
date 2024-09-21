"use client";

import { authenticateUser } from "@/actions/authenticate-user";
import { auth } from "@/auth";
import { Suspense } from "react";
import { UserAuthFormFallback } from "@hub/shadcn-ui/fallbacks/user-auth-form-fallback";
import { UserAuthForm } from "@hub/shadcn-ui/forms/user-auth-form";

export const LoginForm = async () => {
  return (
    <Suspense fallback={<UserAuthFormFallback />}>
      <UserAuthForm signIn={authenticateUser} />
    </Suspense>
  );
};
