import React from 'react';

export const ProductsSkeleton: React.FC = () => {
  const skeletonData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];

  return (
    <div className="bg-[#f9f9f9]">
      <div className="w-full flex justify-between bg-[#0f52ba] text-white p-8">
        <div className="w-[10rem] h-10 bg-gray-200 animate-pulse" />
        <button className="relative flex leading-10 justify-evenly w-16 h-11 text-black bg-white rounded-lg ml-[1rem] mt-[1rem] bg-gray-200 animate-pulse" />
      </div>
      {skeletonData.map((_, index) => (
        <div className="border border-solid rounded-md p-4" key={index}>
          <div className="w-[14rem] m-auto p-2 bg-gray-200 animate-pulse" />
          <div className="flex justify-between m-4 leading-6">
            <h1 className="text-gray-700 font-bold font-normal py-3 w-1/2 bg-gray-200 animate-pulse" />
            <span className="w-auto bg-gray-700 text-white text-center text-sm rounded-md p-3 animate-pulse" />
          </div>
          <p className="p-3 text-justify text-sm bg-gray-200 animate-pulse" />
        </div>
      ))}
    </div>
  );
};

