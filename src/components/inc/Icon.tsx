import * as Icons from "@/assets/icons"

function Icon({
  name,
  size=22,
  bg
}:any) {
  // @ts-ignore: (todo) use dynamic type
  const icon = Icons[name]
  return (
    <div style={{background: bg, width: size + 10, height: size + 10}} className="flex justify-center items-center">
      <img src={icon} width={size} />
    </div>
  )
}

export default Icon