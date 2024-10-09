import { auth } from '@/auth';
import CrawlersContent from './crawlers-content';
import LeftMenu from './left-menu';
import { getUserCrawlById } from '@/actions/crawls/get-user-crawl-by-id';
import { GenericPageParams } from 'types/generic-page-params';
import { CrawlDataResponseDto } from 'types/crawl-dto';

type DashboardCompositionProps = {
  crawler: CrawlDataResponseDto;
};

const DashboardComposition = async ({ crawler }: DashboardCompositionProps) => {
  return (
    <div className='grid h-full w-full pl-[56px] relative'>
      <LeftMenu />
      <CrawlersContent crawlData={crawler} />
    </div>
  );
};
export default DashboardComposition;
