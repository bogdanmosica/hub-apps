import { Metadata } from 'next';
import { Suspense } from 'react';
import { CardsListLoadingFallback } from '@hub/shadcn-ui/fallbacks/cards-fallback';
import { DashboardHeader } from '@hub/shadcn-ui/header';
import { DashboardShell } from '@hub/shadcn-ui/shell';
import { ProtectedRoute } from '@hub/shadcn-ui/protected-route';
import { auth } from '@/auth';
import { GenericPageParams } from 'types/generic-page-params';
import { getCompositionById } from '@/actions/compositions';
import CompositionContent from '@/components/compositions/composition-content';
import { CompositionDataResponseDto } from 'types/compositions';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Edit compositions',
};

const defaultData: CompositionDataResponseDto = {
  id: '',
  name: '',
  userId: '',
  videoUrl: '',
  musicUrl: '',
  orientation: '',
  animation: '',
  volume: 0,
};

export default async function CompositionIdPage({ params }: GenericPageParams) {
  const session = await auth();

  let composition =
    params?.slug === 'new-composition'
      ? defaultData
      : (await getCompositionById(
          session?.user?.id ?? '',
          params?.slug ?? ''
        )) || defaultData;

  return (
    <ProtectedRoute
      redirectPath='dashboard'
      isUserAuthenticated={!!session?.user}
    >
      <DashboardShell>
        <DashboardHeader
          heading='Compositions'
          text='Create and manage compositions.'
        />
        <Suspense fallback={<CardsListLoadingFallback />}>
          <CompositionContent composition={composition} />
        </Suspense>
      </DashboardShell>
    </ProtectedRoute>
  );
}
