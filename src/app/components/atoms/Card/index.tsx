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
    <div className="mx-auto p-4 bg-white">
      <div className="shadow-md">
        <div className="shrink-0">
          <img className="w-full mx-auto" src={image} alt={title} />
        </div>
        <div className="flex justify-between mx-2 py-4">
          <span className="text-[#2c2c2c] text-sm font-bold">{name}</span>
          <span className="bg-[#373737] text-white rounded-md p-2 h-8 text-sm leading-3">R${price}</span>
        </div>
        <div className="px-2 text-xs text-justify">
          <p>{description}</p>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};
