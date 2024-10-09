import { Metadata } from 'next';
import { Suspense } from 'react';
import { CardsListLoadingFallback } from '@hub/shadcn-ui/fallbacks/cards-fallback';
import { DashboardHeader } from '@hub/shadcn-ui/header';
import { DashboardShell } from '@hub/shadcn-ui/shell';
import { ProtectedRoute } from '@hub/shadcn-ui/protected-route';
import { auth } from '@/auth';
import CrawlersList from '@/components/crawlers/crawler-list';
import { getUserCrawls } from '@/actions/crawls/get-user-crawls';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Edit compositions',
};

export default async function CrawlersPage() {
  const session = await auth();

  let crawlersList = await getUserCrawls(session?.user?.id ?? "");

  return (
    <ProtectedRoute
      redirectPath='crawlers'
      isUserAuthenticated={!!session?.user}
    >
      <DashboardShell>
        <DashboardHeader
          heading='Crawlers'
          text='Create and manage crawlers.'
          href='/crawlers/new-crawler'
        />
        <Suspense fallback={<CardsListLoadingFallback />}>
          <CrawlersList list={crawlersList ?? []} />
        </Suspense>
      </DashboardShell>
    </ProtectedRoute>
  );
}
