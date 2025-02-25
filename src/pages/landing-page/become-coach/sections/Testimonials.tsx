import { Avatar, AvatarFallback, AvatarImage, Icon } from "@/components/inc"


function Testimonials() {
  const items = [
    {
      imageUrl: "",
      name: "James Chadwick",
      role: "Chemist",
      testimonial: "This platform has completely transformed my coaching journey! The tools, resources, and seamless scheduling system make it easy to connect with clients and track their progress. Highly recommended!"
    }
  ]

  return (
    <section className="py-16">
      <h3 className="text-xl font-semibold text-center">
        Testimonials from other<br />
        successful Coaches
      </h3>
      <div className="pl-24 mt-8">
        {items.map((item) => <Item {...item} />)}
      </div>
    </section>
  )
}

function Item({
  imageUrl,
  name,
  role,
  testimonial
}:any) {
  return (
    <div className="flex flex-col gap-4 w-[500px]">
      <div className="flex items-end gap-3">
        <Avatar className="rounded-lg w-24 h-24">
          <AvatarImage src={imageUrl} alt="@shadcn" className="!rounded-lg" />
          <AvatarFallback className="rounded-lg">CN</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="text-sm font-semibold">{name}</h4>
          <span className="text-sm">{role}</span>
        </div>
      </div>
      <div className="p-6 bg-secondary flex flex-col gap-2">
        <Icon name="quotes" size={35} />
        <p>{testimonial}</p>
      </div>
    </div>
  )
}

export default Testimonials