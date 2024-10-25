import { Metadata } from 'next';
import { Suspense } from 'react';
import { DashboardHeader } from '@hub/shadcn-ui/header';
import { DashboardShell } from '@hub/shadcn-ui/shell';
import { ProtectedRoute } from '@hub/shadcn-ui/protected-route';
import LeftMenu from '@/components/dashboard/left-menu';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Edit compositions',
};

export default async function DashboardPage() {
  //const session = await auth();
  return (
    <ProtectedRoute redirectPath='dashboard' isUserAuthenticated={true}>
      <DashboardShell>
        <DashboardHeader
          heading='Dashboard'
          text='Create and manage compositions.'
        />
      </DashboardShell>
    </ProtectedRoute>
  );
}
