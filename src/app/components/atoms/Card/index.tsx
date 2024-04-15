type CardProps = {
  imageInfo: {
    image: string;
    title: string;
  };
  name: string;
  price: string;
  description: string;
  children: React.ReactNode;
};

export const Card = ({ imageInfo, name, price, description, children }: CardProps) => {
  const { image, title } = imageInfo;

  return (
    <div className="rounded w-[26rem]">
      <div className="border border-solid">
        <img className="w-[14rem] m-auto 0
          p-2" src={image} alt={title} />
        <div className="flex justify-between m-4 leading-6">
          <h1 className="text-[#2c2c2c] font-bold font-normal py-3">{name}</h1>
          <span className="w-auto bg-[#373737] text-white text-center text-sm rounded-md p-3">R${price}</span>
        </div>
        <span>
          <p className="p-3 text-justify text-sm">{description}
          </p>
        </span>
      </div>
      {children}
    </div>
  );
};