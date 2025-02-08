import { Container, Icon } from '@/components/inc'
import AchieveGoalsImage from "@/assets/images/achieve-goals.svg"
import SchedulingImage from "@/assets/images/scheduling.svg"
import TrackProgress from "@/assets/images/track-progress.svg"
import { Button } from '@/components/base'

function AchieveGoals() {
  return (
    <Container className='flex flex-col gap-6 my-12'>
      <div className='bg-secondary p-16 pb-0 rounded-lg flex items-center'>
        <div className='flex flex-col justify-between gap-24'>
          <div className='flex flex-col gap-6'>
            <h3 className='text-3xl font-bold'>
              Achieve your goals<br />
              with us
            </h3>
            <p className='w-[50%] font-medium text-grey-text text-sm'>
              Partner with top coaches, gain expert insights, and access powerful tools designed to help you stay focused, overcome challenges, and achieve your biggest goals
            </p>
          </div>
          <div className='flex gap-4 w-2/3'>
            <Button size="lg" variant="ghost" className='w-full bg-black text-white rounded-none hover:opacity-80'>
              <Icon name="playstore" />
              Get From Playstore
            </Button>
            <Button size="lg" variant="ghost" className='w-full bg-black text-white rounded-none hover:opacity-80'>
              <Icon name="appstore" />
              Get On Appstore
            </Button>
          </div>
        </div>
        <img src={AchieveGoalsImage} width={400} />
      </div>
      <div className='flex gap-6'>
        <div className='w-full bg-secondary p-16 pb-0 rounded-lg flex flex-col items-center justify-between gap-6'>
          <div className='flex flex-col gap-8 items-center'>
            <h3 className='text-xl font-bold text-center'>
              Convinient Scheduling Made<br />
              Simple
            </h3>
            <p className='w-[70%] font-medium text-grey-text text-sm text-center'>
              Book, reschedule, and manage your coaching sessions effortlessly with our intuitive scheduling system—saving you time and keeping you on track
            </p>
          </div>
          <img src={SchedulingImage} width={400} />
        </div>
        <div className='w-full bg-secondary p-16 pb-0 rounded-lg flex flex-col items-center justify-between gap-6'>
          <div className='flex flex-col gap-8 items-center'>
            <h3 className='text-xl font-bold text-center'>
              Track Your Progress with Ease<br />
              Ease
            </h3>
            <p className='w-[70%] font-medium text-grey-text text-sm text-center'>
              Stay on top of your journey with intuitive progress tracking. Set clear milestones, monitor your achievements, and gain actionable insights to keep you motivated 
            </p>
          </div>
          <img src={TrackProgress} width={400} />
        </div>
      </div>
    </Container>
  )
}

export default AchieveGoals