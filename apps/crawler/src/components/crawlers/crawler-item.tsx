import { Badge } from '@hub/shadcn-ui/ui/badge';
import { Button } from '@hub/shadcn-ui/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@hub/shadcn-ui/ui/card';
import Link from 'next/link';
import { CrawlDataResponseDto } from 'types/crawl-dto';

type CrawlerItemProps = {
  crawler: CrawlDataResponseDto;
};
const CrawlerItem = ({ crawler }: CrawlerItemProps) => {
  return (
    <Link href={`/crawlers/${crawler.id}`} className='md:w-[33%]'>
      <Card key={crawler?.id} className='flex flex-col'>
        <CardHeader>
          <CardTitle className='text-lg mb-2 font-mono break-all'>
            {crawler?.url}
          </CardTitle>
        </CardHeader>
        <CardContent className='flex-grow'>
          <div className='mb-4'>
            <h3 className='text-sm font-semibold mb-2'>Selectors:</h3>
            {Array.isArray(crawler?.selectors) && crawler.selectors.map(({ name, selector }: any, index) => (
              <div key={index} className='mb-3 last:mb-0'>
                <div className='flex justify-between items-center mb-1'>
                  <span className='font-medium'>{name}</span>
                  <Badge variant='outline'>{name ?? ''}</Badge>
                </div>
                <code className='text-xs bg-muted p-1 rounded block break-all'>
                  {selector}
                </code>
              </div>
            ))}
          </div>
          <div className='mb-4'>
            <h3 className='text-sm font-semibold mb-1'>Labels:</h3>
            <div className='flex flex-wrap gap-1'>
              {/* {crawler?.labels?.map((label, index) => (
                <Badge key={index} variant='secondary'>
                  {label}
                </Badge>
              ))} */}
            </div>
          </div>
          <div className='text-xs text-muted-foreground'>
            {/* <p>Created: {new Date(crawler?.createdAt).toLocaleString()}</p>
            <p>Updated: {new Date(crawler?.updatedAt).toLocaleString()}</p> */}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CrawlerItem;
