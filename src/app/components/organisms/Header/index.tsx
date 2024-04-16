
export const Header = ({ children }: any) => {
  return (
    <>
        <header className="flex w-full md:w-full lg:max-w-full">
          <h1 className="font-sans font-semibold text-4xl">MKS</h1>
          <p className="flex justify-between font-extralight text-xl ml-[1rem] 
            mt-[1rem] leading-5">Sistemas</p>
        </header>
        {children}
    </>
  )
}

