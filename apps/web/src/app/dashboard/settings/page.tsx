import { DashboardHeader } from '@hub/shadcn-ui/header';
import { ProtectedRoute } from '@hub/shadcn-ui/protected-route';
import { DashboardShell } from '@hub/shadcn-ui/shell';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
//import { UserNameForm } from "@hub/shadcn-ui/user-name-form";

export const metadata = {
  title: 'Settings',
  description: 'Manage account and website settings.',
};

export default async function SettingsPage() {
  const session = await auth();

  return (
    <ProtectedRoute
      redirectPath='dashboard/billing'
      isUserAuthenticated={!!session}
    >
      <DashboardShell>
        <DashboardHeader
          heading='Settings'
          text='Manage account and website settings.'
        />
        <div className='flex gap-10 w-full'>
          {/* <UserNameForm className="w-full" /> */}
        </div>
      </DashboardShell>
    </ProtectedRoute>
  );
}
