
export const Header = ({ children }: any) => {
  return (
    <>
        <header className="flex">
          <a className="font-sans font-semibold text-4xl" href="#">MKS</a>
          <a className="flex justify-between font-extralight text-xl ml-[1rem] 
            mt-[1rem] leading-5" href="#">Sistemas</a>
        </header>
        {children}
    </>
  )
}

