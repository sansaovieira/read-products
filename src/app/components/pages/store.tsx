import { useEffect, useState } from 'react';

import CustomizedBadges from '@/app/components/atoms/Badge';
import { SkeletonHeader } from '@/app/components/atoms/Skeleton/HeaderSkeleton';
import { Footer } from '@/app/components/organisms/Footer';
import { Header } from '@/app/components/organisms/Header';
import { Products } from '@/app/components/organisms/Products';

export const Store = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowHeader(true);
    }, 1000);
  }, []);

  return (
    <>
      <div className="bg-[#f9f9f9] md:w-full w-full">
        <div className="w-full flex justify-between bg-[#0f52ba] text-white p-8">
          {showHeader ? (
            <Header>
              <a href="#" className="relative flex leading-10 justify-evenly w-20 mr-auto h-11 text-black bg-white rounded-lg">
                <CustomizedBadges />
              </a>
            </Header>
          ) : (
            <SkeletonHeader />
          )}
        </div>
        <Products />
        <Footer
          className="relative w-screen bg-[#eeeeee] bottom-0"
          title="MKS sistemas © Todos os direitos reservados"
        />
      </div>
    </>
  );
};
