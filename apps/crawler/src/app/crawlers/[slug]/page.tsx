import { Metadata } from 'next';
import { Suspense } from 'react';
import { CardsListLoadingFallback } from '@hub/shadcn-ui/fallbacks/cards-fallback';
import { DashboardHeader } from '@hub/shadcn-ui/header';
import { DashboardShell } from '@hub/shadcn-ui/shell';
import { ProtectedRoute } from '@hub/shadcn-ui/protected-route';
import DashboardComposition from '@/components/dashboard/dashboard-composition';
import { auth } from '@/auth';
import { getUserCrawlById } from '@/actions/crawls/get-user-crawl-by-id';
import { GenericPageParams } from 'types/generic-page-params';
import { CrawlDataResponseDto } from 'types/crawl-dto';
import CrawlersContent from '@/components/crawlers/crawlers-content';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Edit compositions',
};

const defaultData: CrawlDataResponseDto = {
  id: 0,
  url: '',
  selectors: [],
  createdAt: '' as unknown as Date,
  updatedAt: '' as unknown as Date,
  userId: '',
  parsedData: [{ isSelected: false, name: '' }],
  compositionIds: [],
};

export default async function CrawlersIdPage({ params }: GenericPageParams) {
  const session = await auth();

  let crawler =
    params?.slug === 'new-crawler'
      ? defaultData
      : await getUserCrawlById({
          userId: session?.user?.id ?? '',
          id: Number(params?.slug) ?? -1,
        });

  return (
    <ProtectedRoute
      redirectPath='dashboard'
      isUserAuthenticated={!!session?.user}
    >
      <DashboardShell>
        <DashboardHeader
          heading='Crawlers'
          text='Create and manage crawlers.'
        />
        <Suspense fallback={<CardsListLoadingFallback />}>
          <CrawlersContent crawler={crawler} />
        </Suspense>
      </DashboardShell>
    </ProtectedRoute>
  );
}
