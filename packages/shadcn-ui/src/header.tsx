import Link from 'next/link';
import { Button } from './ui/button';

interface DashboardHeaderProps {
  heading: string;
  text?: string;
  href?: string;
  children?: React.ReactNode;
}

export function DashboardHeader({
  heading,
  text,
  href,
  children,
}: DashboardHeaderProps): JSX.Element {
  return (
    <div className='flex items-center justify-between px-2'>
      <div className='grid gap-1'>
        <h1 className='font-heading text-3xl md:text-4xl flex items-center'>
          {heading}
          {href && <Link href={href}><Button className='ml-2'>New</Button></Link>}
        </h1>
        {text ? <p className='text-lg text-muted-foreground'>{text}</p> : null}
      </div>
      {children}
    </div>
  );
}
