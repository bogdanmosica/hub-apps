import { MainNav } from "@hub/shadcn-ui/main-nav";
import { dashboardConfig } from "../../config/dashboard";
import { UserAccountNav } from "@hub/shadcn-ui/user-account-nav";
import { auth } from "@/auth";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const session = await auth();
  return (
    <div className="flex h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={dashboardConfig.mainNav} />
          <UserAccountNav user={session?.user} />
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[1fr]">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
