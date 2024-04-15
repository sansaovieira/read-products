import CustomizedBadges from '@/app/components/atoms/Badge';
import { Footer } from '@/app/components/organisms/Footer';
import { Header } from '@/app/components/organisms/Header';
import { Products } from '@/app/components/organisms/Products';

export const Store = () => {
  return (
    <div className="bg-[#f9f9f9]">
      
      <div className="w-full flex justify-between bg-[#0f52ba] text-white p-8">
        <Header>
          <button className="relative flex leading-10 justify-evenly w-16 h-11 text-black bg-white rounded-lg">
            <CustomizedBadges />
          </button>
        </Header>
      </div>
      <Products />
      <Footer 
        className="fixed w-screen bg-[#eeeeee] bottom-0" 
        title="MKS sistemas &copy Todos os direitos reservados" 
      />
    </div>
  )
}

