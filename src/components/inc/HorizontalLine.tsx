
interface Props {
  className?: string
}

function HorizontalLine({
  className
}:Props) {
  return (
    <hr className={`${className} bg-grey-text w-full`} />
  )
}

export default HorizontalLine