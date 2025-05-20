import { motion, AnimatePresence } from 'framer-motion';

export default function DefaultView() {
  return (
    <AnimatePresence>
      <motion.div
        className="flex w-full flex-col items-center justify-center gap-2 2xl:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h3 className="text-5xl leading-none 2xl:text-7xl">DONATUR</h3>
        <h1 className="text-[7rem] font-semibold  leading-none 2xl:text-[10rem]">0000000</h1>
        <h3 className="text-2xl 2xl:text-4xl">TEKAN ENTER UNTUK MULAI UNDIAN</h3>
      </motion.div>
    </AnimatePresence>
  );
}
