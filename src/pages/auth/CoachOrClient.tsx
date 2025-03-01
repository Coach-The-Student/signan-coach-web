import { Icon } from '@/components/inc'
import { PRIMARY_COLOR } from '@/constants'
import { useLocation, useNavigate } from 'react-router-dom'

function CoachOrClient() {
  const navigate = useNavigate()
  const { search } = useLocation()
  const type = search.split("=")[1]

  return (
    <div className='flex flex-col gap-12 text-center'>
      <button className='flex flex-col gap-2 p-6 bg-secondary items-center rounded-lg' onClick={() => navigate("/find-coach")}>
        <Icon name="as_client" bg={PRIMARY_COLOR} className="rounded-full" size={30} padding={20} />
        <h4 className='text-lg font-bold'>Proceed as a Client</h4>
        <p className='text-sm'>
          Book sessions with ease, stay on top of your schedule,
          access valuable resources
        </p>
      </button>
      <button className='flex flex-col gap-2 p-6 bg-secondary items-center rounded-lg' onClick={() => navigate(type === "new_user" ? "/dashboard/register" : "/dashboard/login")}>
        <Icon name="as_coach" bg={PRIMARY_COLOR} className="rounded-full" size={30} padding={20} />
        <h4 className='text-lg font-bold'>Proceed as a Coach</h4>
        <p className='text-sm'>
          Book sessions with ease, stay on top of your schedule,
          access valuable resources
        </p>
      </button>
    </div>
  )
}

export default CoachOrClient