import { Container } from "@/components/inc"
import MentorEmpowerImage from "@/assets/images/mentor-empower.png"
import EarnLiveImage from "@/assets/images/earn-live.png"

function MakeDifference() {
  return (
    <Container className='py-12 flex flex-col gap-2'>
      <h1 className="text-3xl font-bold text-center">
        Our Coaching Programs
      </h1>
      <p className="text-center">
        Let's build the future of learning and professional<br />
        coaching together!
      </p>
      <div className="flex justify-center gap-6 text-white mt-8">
        <div className="p-16 bg-primary w-fit flex flex-col gap-2 rounded-lg">
          <img src={MentorEmpowerImage} />
          <h3 className="text-2xl font-semibold">Mentor & Empower Others</h3>
          <p>Change thousands of lives with your knowledge. As a consultant, you don’t just offer advice, you open doors to new opportunities. Lead others to success and create a legacy of growth, starting today!</p>
        </div>
        <div className="p-16 bg-[#0A2E4A] w-fit flex flex-col gap-2 rounded-lg">
          <img src={EarnLiveImage} />
          <h3 className="text-2xl font-semibold">Earn & Live Greatly</h3>
          <p>Consulting isn’t just a job. it is a fulfilling way to turn your expertise into income. Shape futures, guide careers, and grow your wealth, all while doing what you love. Make a difference, and let your impact fuel your success."</p>
        </div>
      </div>
    </Container>
  )
}

export default MakeDifference