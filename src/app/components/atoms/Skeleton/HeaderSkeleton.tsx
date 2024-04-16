export const SkeletonHeader = () => {
  return (
    <header className="flex justify-between">
      <div className="w-[16rem] rounded-lg h-10 bg-gray-200 animate-pulse " />
      <div className="flex justify-items-end rounded-lg w-[6rem] h-8 ml-[52rem] -mt-[0.1rem] bg-gray-200 animate-pulse" />
    </header>
  );
};
