import { Container, Icon } from '@/components/inc'
import { PRIMARY_COLOR } from '@/constants'

function CoachingPrograms() {
  const items = [
    {
      title: "Financial Coaching",
      description: "Take charge of your financial future with expert coaching designed to help you budget wisely, save effectively. Whether you're looking to get out of debt, build wealth, financial coaching provides the tools and strategies to achieve lasting financial security."
    },
    {
      title: "Business Coaching",
      description: "Collaborate with our tutors to create valuable content for learners. Whether you have expertise in a niche industry or want to develop co-branded content, we'll work together to deliver impactful educational resources."
    },
    {
      title: "Life Coaching",
      description: "Transform your mindset, set meaningful goals, and create the life you've always envisioned. Life coaching helps you identify your strengths, overcome obstacles, and develop a clear action plan for success."
    },
    {
      title: "Relationship Coaching",
      description: "Promote Learnille to your audience and earn commissions for every successful referral. Share the power of education and consulting while growing your revenue through our affiliate program."
    }
  ]

  return (
    <Container className='py-10 flex flex-col gap-2'>
      <h1 className="text-3xl font-bold text-center">
        Our Coaching Programs
      </h1>
      <p className="text-center">
        Let's build the future of learning and professional<br />
        coaching together!
      </p>
      <div className='grid grid-cols-2 gap-6 mt-8'>
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
    <div className='w-full bg-[#6FB1FC] flex items-end border border-[#6FB1FC] rounded-lg overflow-hidden'>
      <Icon name="arrow_right" bg={PRIMARY_COLOR} size={20} className="!w-12" />
      <div className='w-full h-44 flex flex-col gap-1 justify-center bg-white px-6'>
        <h2 className='font-semibold'>{title}</h2>
        <p className='text-sm'>{description}</p>
      </div>
    </div>
  )
}

export default CoachingPrograms