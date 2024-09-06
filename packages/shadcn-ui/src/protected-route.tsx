"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
  redirectPath: string;
  isUserAuthenticated?: boolean;
  isCheckingUserAuth?: boolean;
  children: React.ReactNode;
}

export function ProtectedRoute({
  redirectPath,
  children,
  isCheckingUserAuth = false,
  isUserAuthenticated = false,
}: ProtectedRouteProps): React.ReactNode | null {
  const router = useRouter();

  useEffect(() => {
    if (!isCheckingUserAuth && !isUserAuthenticated) {
      router.push(`/login?from=${redirectPath || ""}`);
    }
  }, [router, isUserAuthenticated, redirectPath, isCheckingUserAuth]);

  return isUserAuthenticated ? children : null;
}
