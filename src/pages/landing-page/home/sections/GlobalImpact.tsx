import { Container } from '@/components/inc'
import GlobalImapctImage from "@/assets/images/global-impact.svg"
import { Button } from '@/components/base'

function GlobalImpact() {
  return (
    <Container className='flex items-center py-12 px-32'>
      <div className='w-full flex flex-col gap-6 items-start'>
        <h3 className='text-2xl font-bold'>
          Make a Global Impact as a<br />
          Coach with Signan Solution
        </h3>
        <p className='text-sm w-2/3'>
          Join a global network of professional coaches and expand your reach with Signan Solution. Empower clients worldwide, grow your coaching business, and access innovative tools to create lasting impact across industries
        </p>
        <Button pill size="lg">Become A Coach</Button>
      </div>
      <img src={GlobalImapctImage} width="50%" />
    </Container>
  )
}

export default GlobalImpact