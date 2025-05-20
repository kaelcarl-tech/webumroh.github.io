type ClearButtonType = {
  clearWinner: () => void;
  clearButtonRef: React.RefObject<HTMLButtonElement>;
  isRaffleDone: boolean;
};

export default function ClearButton({
  clearWinner,
  clearButtonRef,
  isRaffleDone,
}: ClearButtonType) {
  return (
    <button
      disabled={isRaffleDone}
      type="button"
      ref={clearButtonRef}
      className="absolute bottom-0 mx-auto translate-y-5 animate-fade bg-[#003654] px-4 py-2 text-xl text-white outline outline-1 outline-white duration-200 animate-delay-[300ms] animate-duration-500 animate-once animate-ease-in active:scale-95 active:bg-gray-600 disabled:scale-100 disabled:text-opacity-50 disabled:hover:cursor-not-allowed disabled:active:bg-[#003654]"
      onClick={() => clearWinner()}
    >
      Clear
    </button>
  );
}
