
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
    <div className="p-4 border-b border-border-grey">
      {title ? (
        <div className="flex justify-between items-center">
          <h3 className="font-medium">{title}</h3>
          {info && <span>i</span>}
        </div>
      ) : children}
    </div>
  )
}

function Body({children}:{children: React.ReactNode}) {
  return (
    <div className="p-4 py-10">
      {children}
    </div>
  )
}

Card.Header = Header
Card.Body = Body

export default Card