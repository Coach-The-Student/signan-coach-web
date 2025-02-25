import { Button } from "@/components/base"
import { Avatar, AvatarFallback, AvatarImage, Icon } from "@/components/inc"

interface Props {
  photoURL: string
  name: string
  location: string
  yearsOfExperience: number,
  price: number,
  skill: string
  about: string
  tags: string[]
}

function Coach({
  photoURL,
  name,
  price,
  location,
  yearsOfExperience,
  skill,
  about,
  tags
}: Props) {
  return (
    <div className="flex gap-6 px-10 py-6 rounded-xl border-4 border-grey-card">
      <Avatar className="w-24 h-24">
        <AvatarImage src={photoURL} alt="@shadcn" className="!rounded-lg" />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="w-full flex flex-col gap-3">
        <div className="flex justify-between items-center text-lg font-bold">
          <h4>{name}</h4>
          <h4>${price}</h4>
        </div>
        <div className="flex items-center text-sm text-grey-text gap-2">
          <Icon name="location" size={16} padding={0} />
          <span>{location}</span>
          <Icon name="experience" size={16} padding={0} />
          <span>{yearsOfExperience} years of experience</span>
        </div>
        <h5 className="text-lg font-medium">{skill}</h5>
        <p className="text-sm">{about}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {tags.map((tag) => <span className="px-4 py-1 rounded-full bg-secondary text-xs">{tag}</span>)}
          </div>
          <Button variant="ghost" className="text-xs text-primary">
            View Profile
            <Icon name="greater_arrow" size={6} padding={2} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Coach