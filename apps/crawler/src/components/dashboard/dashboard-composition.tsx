import CrawlersContent from '../crawlers/crawlers-content';
import { CrawlDataResponseDto } from 'types/crawl-dto';

type DashboardCompositionProps = {
  crawler: CrawlDataResponseDto;
};

const DashboardComposition = async ({ crawler }: DashboardCompositionProps) => {
  return (
    <div className='grid h-full w-full pl-[56px] relative'>
      {/* <CrawlersContent crawlData={crawler} /> */}
    </div>
  );
};
export default DashboardComposition;
