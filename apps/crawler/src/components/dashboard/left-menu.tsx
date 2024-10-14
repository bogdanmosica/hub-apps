'use client';

import { ReactNode, useEffect, useState } from 'react';
import { Button } from '@hub/shadcn-ui/ui/button';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@hub/shadcn-ui/ui/accordion';
import { Sheet, SheetTrigger, SheetContent } from '@hub/shadcn-ui/ui/sheet';
import { Icons } from '@hub/shadcn-ui/icons';
import { cn } from '@hub/utils';
import { Card } from '@hub/shadcn-ui/card';
import { CardContent } from '@hub/shadcn-ui/ui/card';
import { ScrollArea } from '@hub/shadcn-ui/ui/scroll-area';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@hub/shadcn-ui/ui/popover';

export type SidebarItemProps = {
  title: string;
  icon: ReactNode;
  items: string[];
  id: number;
};

const sidebarItems: SidebarItemProps[] = [
  {
    title: 'Text',
    icon: <Icons.Book name='text' />,
    items: ['Heading', 'Subheading', 'Body Text'],
    id: 1,
  },
  {
    title: 'Shapes',
    icon: <Icons.BackgroundVideos name='shape' />,
    items: ['Rectangle', 'Circle', 'Triangle'],
    id: 2,
  },
  {
    title: 'Images',
    icon: <Icons.BackgroundVideos name='image' />,
    items: ['Upload', 'Gallery', 'Stock'],
    id: 3,
  },
  {
    title: 'Background',
    icon: <Icons.BackgroundVideos name='background' />,
    items: ['Solid Color', 'Gradient', 'Pattern'],
    id: 4,
  },
];

const LeftMenu: React.FC = () => {
  const menuItems = sidebarItems;

  const animationTypes = [
    { name: 'Fade', description: 'Smooth fade in/out effect' },
    { name: 'Slide', description: 'Sliding animation from side to side' },
    { name: 'Bounce', description: 'Bouncing effect for playful interactions' },
    { name: 'Rotate', description: 'Rotating animation for dynamic elements' },
  ];

  return (
    <div className='flex h-full'>
      <nav className='flex flex-col justify-start sm:w-16 w-full sm:h-full h-16 sm:fixed sm:left-0 fixed top-16'>
        <ul className='flex sm:flex-col flex-row sm:space-y-2 sm:space-x-0 space-x-2 sm:p-2 p-1 w-full'>
          {menuItems.map((item, index) => (
            <li key={index} className='w-full'>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant='ghost'
                    className='w-full sm:h-14 h-full rounded-full sm:rounded-lg flex items-center justify-center'
                  >
                    {item.icon}
                    <span className='sr-only'>{item.title}</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  side='right'
                  align='start'
                  className='w-64 h-[calc(100vh-64px)] p-4 ml-0 rounded-none border-l'
                >
                  <h2 className='text-lg font-semibold mb-4'>{item.title}</h2>
                  <p>{item.items}</p>
                </PopoverContent>
              </Popover>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default LeftMenu;
