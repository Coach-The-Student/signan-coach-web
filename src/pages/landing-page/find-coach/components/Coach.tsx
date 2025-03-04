import { Button } from "@/components/base";
import { Avatar, AvatarFallback, AvatarImage, Icon } from "@/components/inc";

interface Props {
  photoURL: string;
  name: string;
  location: string;
  yearsOfExperience: number;
  price: number;
  skill: string;
  about: string;
  tags: string[];
}

function Coach({
  photoURL,
  name,
  price,
  location,
  yearsOfExperience,
  skill,
  about,
  tags,
}: Props) {
  return (
    <div className="flex flex-col max-sm:flex-col md:flex-row gap-6 max-sm:gap-4 px-10 max-sm:px-4 py-6 max-sm:py-4 rounded-xl border-4 border-grey-card">
      <Avatar className="w-24 h-24 max-sm:w-16 max-sm:h-16">
        <AvatarImage src={photoURL} alt={name} className="!rounded-lg" />
        <AvatarFallback className="text-xl max-sm:text-base">
          {name[0]}
        </AvatarFallback>
      </Avatar>
      <div className="w-full flex flex-col gap-3 max-sm:gap-2">
        <div className="flex flex-col max-sm:flex-col md:flex-row justify-between items-start md:items-center text-lg max-sm:text-base font-bold gap-2 md:gap-0">
          <h4>{name}</h4>
          <h4>${price}</h4>
        </div>
        <div className="flex flex-wrap items-center text-sm max-sm:text-xs text-grey-text gap-2 max-sm:gap-1">
          <Icon
            name="location"
            size={16}
            padding={0}
            className="max-sm:size-4"
          />
          <span>{location}</span>
          <Icon
            name="experience"
            size={16}
            padding={0}
            className="max-sm:size-4"
          />
          <span>{yearsOfExperience} years of experience</span>
        </div>
        <h5 className="text-lg max-sm:text-sm md:text-base lg:text-lg font-medium">
          {skill}
        </h5>
        <p className="text-sm max-sm:text-xs">{about}</p>
        <div className="flex flex-col max-sm:flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0">
          <div className="flex flex-wrap gap-2 max-sm:gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 max-sm:px-2 py-1 max-sm:py-0.5 rounded-full bg-secondary text-xs max-sm:text-[10px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <Button
            variant="ghost"
            className="text-xs max-sm:text-[10px] md:text-xs text-primary"
          >
            View Profile
            <Icon
              name="greater_arrow"
              size={6}
              padding={2}
              className="max-sm:size-3"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Coach;
