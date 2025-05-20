import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import { donors } from '../libs/donors';
import { DonorType } from '../types/donor';

type WinnerViewType = {
  setIsRaffleDone: React.Dispatch<React.SetStateAction<boolean>>;
};

const counterAudioUrl = new URL('../assets/audios/counter.mp3', import.meta.url).href;
const counterSfx = new Audio(counterAudioUrl);

export default function WinnerView({ setIsRaffleDone }: WinnerViewType) {
  const [isRandomizing, setIsRandomizing] = useState(true);
  const [winner, setWinner] = useState<DonorType>({
    donorsID: Math.floor(1000000 + Math.random() * 9000000),
    name: 'a',
    raffleID: 123,
    numbers: '123',
  });

  const nameSize = winner.name.length > 40 ? 'text-3xl 2xl:text-[4rem]' : 'text-5xl 2xl:text-7xl';

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    let intervalId: number;

    if (isRandomizing) {
      intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * donors.length);
        const selectedWinner = donors[randomIndex];
        setWinner(selectedWinner);
      }, 50);

      counterSfx.play();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      clearInterval(intervalId);
    };
  }, [isRandomizing]);

  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      setIsRandomizing((prev) => !prev);

      if (counterSfx.currentTime > 0) {
        counterSfx.pause();
        counterSfx.load();
      }

      if (isRandomizing) {
        setIsRaffleDone(false);
      } else {
        setIsRaffleDone(true);
      }
    }
  }
  const boxRef = useRef<HTMLDivElement | null>(null);

  const animate =
    isRandomizing && boxRef.current
      ? { transition: { delay: 0.2 }, y: boxRef.current.clientHeight * (1 / 6) }
      : { y: 0 };

  return (
    <motion.div
      ref={boxRef}
      className="flex h-full w-full flex-col items-center justify-evenly gap-2 2xl:gap-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeIn',
        duration: 0.5,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <div className="flex h-fit w-full flex-col items-center justify-center gap-2 2xl:gap-4">
        <motion.h3 animate={animate} className="text-5xl leading-none 2xl:text-7xl">
          DONATUR
        </motion.h3>
        <motion.h1
          animate={animate}
          className=" text-[7rem] font-semibold  leading-none 2xl:text-[10rem]"
        >
          {isRandomizing ? winner.raffleID : winner.donorsID}
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{
            opacity: isRandomizing ? 0 : 1,
            transition: {
              ease: 'easeIn',
              duration: 0.4,
            },
          }}
          className={`${nameSize} mb-2 text-center leading-none`}
        >
          {winner.name}
        </motion.h3>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isRandomizing ? 0 : 1,
          transition: {
            ease: 'easeIn',
            duration: 0.4,
          },
        }}
        exit={{
          opacity: 0,
          y: 100,
          transition: { duration: 0.2 },
        }}
        className="flex flex-col items-center gap-2 justify-self-end text-center uppercase"
      >
        <h4 className="text-xl leading-none 2xl:text-3xl">No. Hp</h4>
        <h2 className="text-5xl font-bold leading-none 2xl:text-6xl">{winner.numbers}</h2>
      </motion.div>
    </motion.div>
  );
}
