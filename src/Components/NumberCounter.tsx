import { memo } from 'react';
import AnimatedNumbers from 'react-animated-numbers';

export const NumberCounter = ({ num }: { num: number }) => {
  return (
    <AnimatedNumbers
      animateToNumber={num}
      transitions={() => ({
        type: 'keyframes',
        ease: 'linear',
        duration: 1,
      })}
      fontStyle={{
        fontSize: '6rem',
      }}
      className="mx-auto h-full translate-y-2 font-semibold"
    />
  );
};

export const MemoizedNumberCounter = memo(NumberCounter);
