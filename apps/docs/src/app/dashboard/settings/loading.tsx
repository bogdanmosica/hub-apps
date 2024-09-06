import { CardSkeleton } from "shadcn-ui/card-skeleton";
import { DashboardHeader } from "shadcn-ui/header";
import { DashboardShell } from "shadcn-ui/shell";

export default function DashboardSettingsLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  );
}
