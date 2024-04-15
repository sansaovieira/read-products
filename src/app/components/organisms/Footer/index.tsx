
type FooterProps = {
  title: string;
  className?: string;
}
export const Footer = ({title, className }: FooterProps) => {
  return (
    <footer className={`${className}`}>
      <p className="text-black text-center p-4">{title}</p>
    </footer>
  )
}

