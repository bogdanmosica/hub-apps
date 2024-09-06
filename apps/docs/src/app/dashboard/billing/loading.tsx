import { CardSkeleton } from "shadcn-ui/card-skeleton";
import { DashboardHeader } from "shadcn-ui/header";
import { DashboardShell } from "shadcn-ui/shell";

export default function DashboardBillingLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Billing"
        text="Manage billing and your subscription plan."
      />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  );
}
