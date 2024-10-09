import { Skeleton } from '../ui/skeleton';

export function CardsListLoadingFallback(): JSX.Element {
  return (
    <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      <Skeleton className='divide-y divide-border rounded-md border p-8' />
      <Skeleton className='divide-y divide-border rounded-md border p-8' />
      <Skeleton className='divide-y divide-border rounded-md border p-8' />
      <Skeleton className='divide-y divide-border rounded-md border p-8' />
      <Skeleton className='divide-y divide-border rounded-md border p-8' />
    </div>
  );
}
