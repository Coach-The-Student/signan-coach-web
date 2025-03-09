import { info as infoIcon } from "@/assets/icons";

function Card({children}:{children: React.ReactNode}) {
  return (
    <section className="bg-grey-card rounded-xl overflow-hidden">
      {children}
    </section>
  )
}

interface HeaderProps {
  children?: React.ReactNode;
  title?: string;
  info?: string;
}
function Header({children, title, info}:HeaderProps) {
  return (
    <div className="p-6 border-b border-border-grey">
      {title ? (
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-bold">{title}</h3>
          {info && <img src={infoIcon} />}
        </div>
      ) : children}
    </div>
  )
}

function Body({children, className}:{children: React.ReactNode, className?: string}) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  )
}

Card.Header = Header
Card.Body = Body

export default Card