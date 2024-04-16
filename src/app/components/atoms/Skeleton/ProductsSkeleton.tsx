import React from 'react';

export const ProductsSkeleton: React.FC = () => {
  const skeletonData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];

  return (
    <div className="bg-[#f9f9f9] grid grid-cols-4 lg:gap-4 bg-red bg-white">
    {skeletonData.map((_, index) => (
      <div className="border shadow-md border-solid rounded-md p-4 my-4" key={index}>
        <div className="w-full h-16 bg-gray-200 animate-pulse mb-2" />
        <div className="w-full h-8 bg-gray-200 animate-pulse mb-2" />
        <div className="w-2/3 h-6 bg-gray-200 animate-pulse" />
      </div>
    ))}
  </div>
);
};