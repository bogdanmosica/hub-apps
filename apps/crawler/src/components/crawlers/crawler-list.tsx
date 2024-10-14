'use client';

import { CrawlDataResponseDto, GenericDataList } from 'types/crawl-dto';
import CrawlerItem from './crawler-item';
import { useCrawlsQuery } from 'queries/crawls/useCrawlsQuery';

type CrawlersListProps = {
  list: CrawlDataResponseDto[];
};

const CrawlersList = ({ list = [] }: CrawlersListProps) => {
  const { data, isLoading } = useCrawlsQuery(list);

  if (list.length === 0 && isLoading) return <div>Loading...</div>;

  return (
    <div className='flex items-center justify-between'>
      {data.length > 0 &&
        data.map((crawler, index) => (
          <CrawlerItem
            key={crawler.id?.toString() ?? index}
            crawler={crawler}
          />
        ))}
    </div>
  );
};
export default CrawlersList;
