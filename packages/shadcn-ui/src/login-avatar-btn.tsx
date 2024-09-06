"use client";
import { cn } from "@hub/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { UserAccountNav } from "./user-account-nav";

export interface LoginAvatarBtnProps {
  children?: React.ReactNode;
  user: Record<string, unknown>;
}

export function LoginAvatarBtn({ user }: LoginAvatarBtnProps): JSX.Element {
  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- just for now */}
      {!user ? (
        <Link
          className={cn(
            buttonVariants({ variant: "secondary", size: "sm" }),
            "px-4 ml-4",
          )}
          href="/login"
        >
          Login
        </Link>
      ) : (
        <UserAccountNav user={user} />
      )}
    </>
  );
}

export default LoginAvatarBtn;
