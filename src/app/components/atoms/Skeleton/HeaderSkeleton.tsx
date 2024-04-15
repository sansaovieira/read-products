
export const SkeletonHeader: React.FC = () => {
  return (
    <header className="flex">
      <div className="w-[10rem] h-10 bg-gray-200 animate-pulse" />
      <div className="w-[8rem] h-6 ml-[1rem] mt-[1rem] bg-gray-200 animate-pulse" />
    </header>
  );
};
