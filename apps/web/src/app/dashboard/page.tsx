//'use server';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { CardsListLoadingFallback } from '@hub/shadcn-ui/fallbacks/cards-fallback';
import { DashboardHeader } from '@hub/shadcn-ui/header';
import { DashboardShell } from '@hub/shadcn-ui/shell';
import { ProtectedRoute } from '@hub/shadcn-ui/protected-route';
import { auth } from '@/auth';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Edit compositions',
};

export default async function DashboardPage() {
  const session = await auth();
  return (
    <ProtectedRoute
      redirectPath='dashboard'
      isUserAuthenticated={!!session?.user?.email}
    >
      <DashboardShell>
        <DashboardHeader
          heading='Compositions'
          text='Create and manage compositions.'
        />
        <Suspense fallback={<CardsListLoadingFallback />}>
          <CardsListLoadingFallback />
        </Suspense>
      </DashboardShell>
    </ProtectedRoute>
  );
}
