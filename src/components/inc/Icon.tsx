import * as Icons from "@/assets/icons"

function Icon({
  name,
  size=22,
  padding=10,
  bg,
  className
}:any) {
  // @ts-ignore: (todo) use dynamic type
  const icon = Icons[name]
  return (
    <div style={{background: bg, width: size + padding, height: size + padding}} className={`flex justify-center items-center ${className}`}>
      <img src={icon} width={size} />
    </div>
  )
}

export default Icon