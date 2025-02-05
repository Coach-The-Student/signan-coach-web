import { Button } from '@/components/base'
import { Container } from '@/components/inc'
import HeroImage from "@/assets/images/hero.png"

function Hero() {
  return (
    <Container className='min-h-screen flex items-center justify-between pt-24 px-44'>
      <div className='flex flex-col items-start gap-8'>
        <div className='flex flex-col gap-5'>
          <h2 className='text-6xl font-semibold'>
            Empowering Lives<br />
            Through Coaching<br />
            Globally
          </h2>
          <p>
            Get expert guidance, personalized coaching, and AI-powered<br />
            insights to help you achieve your goals faster
          </p>
        </div>
        <Button pill size="lg">
          Get Started
        </Button>
        <div>
          <p className='text-sm font-medium'>Trusted by 300K+ organizations worldwide</p>
        </div>
      </div>
      <img src={HeroImage} width="45%" />
    </Container>
  )
}

export default Hero