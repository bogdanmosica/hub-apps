import React from 'react';

const AlignEnd: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <div className='self-end'>{children}</div>;
};

export default AlignEnd;
