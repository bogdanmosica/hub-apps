import { ScrollArea } from '@hub/shadcn-ui/ui/scroll-area';
import { GenericDataList } from 'types/crawl-dto';
import { ParsedEntity } from '../dashboard/crawling-table';
import { Card } from '@hub/shadcn-ui/ui/card';
import { CardContent } from '@hub/shadcn-ui/ui/card';

const CrawlerResultsCards = ({
  results,
}: {
  results: GenericDataList | ParsedEntity[];
}) => {
  const selectedResults: number[] = [];
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Results</h2>
      <ScrollArea className='h-[600px] rounded-md border p-4'>
        <div className='space-y-4'>
          {results.map((result, index) => (
            <Card
              key={String(result.id) ?? index}
              className={`cursor-pointer transition-colors ${
                selectedResults.includes(Number(result.id))
                  ? 'bg-primary text-primary-foreground'
                  : ''
              }`}
              onClick={() => console.log(result.id)}
            >
              <CardContent className='p-4'>
                {Object.values(result).map((value, index) => (
                  <p key={index} className='text-sm text-muted-foreground'>
                    {String(value)}
                  </p>
                ))}

                {/* <a
                  href={result.url}
                  className='text-sm text-blue-500 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={(e) => e.stopPropagation()}
                >
                  {result.url}
                </a> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CrawlerResultsCards;
