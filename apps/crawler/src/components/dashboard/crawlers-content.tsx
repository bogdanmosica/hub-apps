'use client';

import { Icons } from '@hub/shadcn-ui/icons';
import { Badge } from '@hub/shadcn-ui/ui/badge';
import { Button } from '@hub/shadcn-ui/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@hub/shadcn-ui/ui/drawer';
import CrawlerForm from '../crawler-form';
import { useState } from 'react';
import CrawlingTable from './crawling-table';
import { CrawlDataResponseDto } from 'types/crawl-dto';

const defaultData: CrawlDataResponseDto = {
  id: 0,
  url: '',
  selectors: [],
  createdAt: `${new Date()}`,
  updatedAt: `${new Date()}`,
  userId: '',
  parsedData: [{ isSelected: false, name: '' }],
  labels: [],
};

type CrawlersContentProps = {
  crawlData?: CrawlDataResponseDto;
};

const CrawlersContent = ({ crawlData }: CrawlersContentProps) => {
  const [data, setData] = useState<CrawlDataResponseDto>(
    crawlData ?? defaultData
  );

  return (
    <div className='flex flex-col'>
      <header className='sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4'>
        <h1 className='text-xl font-semibold'>Playground</h1>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant='ghost' size='icon' className='md:hidden'>
              <Icons.Settings className='size-4' />
              <span className='sr-only'>Settings</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent className='max-h-[80vh]'>
            <DrawerHeader>
              <DrawerTitle>Configuration</DrawerTitle>
              <DrawerDescription>
                Configure the settings for the model and messages.
              </DrawerDescription>
            </DrawerHeader>
            <CrawlerForm data={data} onData={(data) => setData(data)} />
          </DrawerContent>
        </Drawer>
        <Button variant='outline' size='sm' className='ml-auto gap-1.5 text-sm'>
          <Icons.Share className='size-3.5' />
          Share
        </Button>
      </header>
      <main className='grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3'>
        <div
          className='relative hidden flex-col items-start gap-8 md:flex'
          x-chunk='dashboard-03-chunk-0'
        >
          <CrawlerForm data={data} onData={(data) => setData(data)} />
        </div>
        <div className='relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2'>
          <Badge variant='outline' className='absolute right-3 top-3'>
            Output
          </Badge>
          <div className='flex-1' />
          <CrawlingTable
            parsedData={data.parsedData}
            // onSelectionChange={(selectedData: any) =>
            //   console.log({ selectedData })
            // }
          />
        </div>
      </main>
    </div>
  );
};
export default CrawlersContent;
