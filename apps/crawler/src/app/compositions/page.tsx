import { Metadata } from 'next';
import { Suspense } from 'react';
import { CardsListLoadingFallback } from '@hub/shadcn-ui/fallbacks/cards-fallback';
import { DashboardHeader } from '@hub/shadcn-ui/header';
import { DashboardShell } from '@hub/shadcn-ui/shell';
import { ProtectedRoute } from '@hub/shadcn-ui/protected-route';
import { auth } from '@/auth';
import CrawlersList from '@/components/crawlers/crawler-list';
import { getUserCrawls } from '@/actions/crawls/get-user-crawls';
import { getUserCompositions } from '@/actions/compositions';
import CompositionsList from '@/components/compositions/composition-list';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Edit compositions',
};

export default async function CompositionsPage() {
  const session = await auth();

  let crawlersList = await getUserCompositions(session?.user?.id ?? '');

  return (
    <ProtectedRoute
      redirectPath='compositions'
      isUserAuthenticated={!!session?.user}
    >
      <DashboardShell>
        <DashboardHeader
          heading='Compositions'
          text='Create and manage compositions.'
          href='/compositions/new-composition'
        />
        <Suspense fallback={<CardsListLoadingFallback />}>
          <CompositionsList list={crawlersList ?? []} />
        </Suspense>
      </DashboardShell>
    </ProtectedRoute>
  );
}
