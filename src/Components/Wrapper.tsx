type WrapperBodyTyoe = {
  children: React.ReactNode;
};

export default function WrapperBody({ children }: WrapperBodyTyoe) {
  return (
    <div className="relative flex h-4/5 w-full flex-col items-center justify-center gap-8 p-4 text-white outline outline-1 outline-white">
      {children}
    </div>
  );
}
