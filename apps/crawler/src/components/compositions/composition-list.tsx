'use client';

import { CompositionDataResponseDto } from 'types/compositions';
import { useCompositionsQuery } from 'queries/compositions/useCompositionsQuery';
import CompositionItem from './composition-item';

type CompositionsListProps = {
  list: CompositionDataResponseDto[];
};

const CompositionsList = ({ list = [] }: CompositionsListProps) => {
  const { data, isLoading } = useCompositionsQuery(list);

  if (list.length === 0 && isLoading) return <div>Loading...</div>;

  return (
    <div className='flex items-center justify-between'>
      {data.length > 0 &&
        data.map((composition, index) => (
          <CompositionItem key={index} composition={composition}></CompositionItem>
        ))}
    </div>
  );
};
export default CompositionsList;
