import { Container, Icon } from '@/components/inc'
import HowToImage from "@/assets/images/how-to-become-coach.png"
import { PRIMARY_COLOR } from '@/constants'

function HowTo() {
  const items = [
    {
      title: "Sign Up & Create Your Profile",
      description: "Get started by registering on our platform and setting up your coach profile. Showcase your expertise, experience, and coaching style to attract the right clients."
    },
    {
      title: "Offer Your Coaching Services",
      description: "Set your availability, define your packages, and connect with clients through video calls and messaging."
    },
    {
      title: "Grow & Make an Impact",
      description: "rack progress, build relationships, and expand your coaching business with powerful tools."
    },
  ]

  return (
    <Container className='bg-secondary py-24 flex justify-between items-center gap-8'>
      <img src={HowToImage} width="40%" />
      <div className='w-1/2 flex flex-col gap-5'>   
        <h2 className='text-xl font-bold'>How to become a coach</h2>
        <p className='text-sm'>
          Join our platform as a coach and share your expertise with a global audience. Sign up, create your profile, and start connecting with clients who need your guidance.  we provide the tools and support to help you succeed.
        </p>
        {items.map((item) => <Item {...item} />)}
      </div>
    </Container>
  )
}

function Item({
  title,
  description
}: {
  title: string,
  description: string
}) {
  return (
    <div className='flex gap-5 px-8 py-6 bg-white'>
      <Icon name="check" bg={PRIMARY_COLOR} className="rounded-full mt-1" size={14} />
      <div className='w-[90%] flex flex-col gap-1'>
        <h3 className='font-semibold'>{title}</h3>
        <p className='text-sm'>{description}</p>
      </div>
    </div>
  )
}

export default HowTo