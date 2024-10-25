import { Badge } from '@hub/shadcn-ui/ui/badge';
import { Button } from '@hub/shadcn-ui/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@hub/shadcn-ui/ui/card';
import Link from 'next/link';
import { CompositionDataResponseDto } from 'types/compositions';

type CompositionItemProps = {
  composition: CompositionDataResponseDto;
};
const CompositionItem = ({ composition }: CompositionItemProps) => {
  return (
    <Link href={`/compositions/${composition.id}`} className='md:w-[33%]'>
      <Card key={composition.id} className='flex flex-col'>
        <CardHeader>
          <CardTitle className='text-lg mb-2 font-mono break-all'>
            {composition.name}
          </CardTitle>
        </CardHeader>
        <CardContent className='flex-grow'>
          {/* Video URL */}
          <div className='mb-4'>
            <h3 className='text-sm font-semibold mb-2'>Video URL:</h3>
            <code className='text-xs bg-muted p-1 rounded block break-all'>
              {composition.videoUrl}
            </code>
          </div>

          {/* Music URL */}
          <div className='mb-4'>
            <h3 className='text-sm font-semibold mb-2'>Music URL:</h3>
            <code className='text-xs bg-muted p-1 rounded block break-all'>
              {composition.musicUrl}
            </code>
          </div>

          {/* Orientation */}
          <div className='mb-4'>
            <h3 className='text-sm font-semibold mb-2'>Orientation:</h3>
            <Badge variant='outline'>{composition.orientation}</Badge>
          </div>

          {/* Animation */}
          <div className='mb-4'>
            <h3 className='text-sm font-semibold mb-2'>Animation:</h3>
            <Badge variant='outline'>{composition.animation}</Badge>
          </div>

          {/* Volume */}
          <div className='mb-4'>
            <h3 className='text-sm font-semibold mb-2'>Volume:</h3>
            <Badge variant='outline'>{composition.volume}%</Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CompositionItem;
