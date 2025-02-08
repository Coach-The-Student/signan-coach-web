import WordMark from "@/assets/wordmark.png"
import { Button } from "@/components/base"
import { Icon } from '@/components/inc'
import { Link, Outlet } from 'react-router-dom'

function LayoutFooter() {
  return (
    <>
      <Outlet />
      <footer className="px-24 py-12 flex flex-col gap-24">
        <div className="w-full p-12 rounded-xl text-white flex flex-col gap-4 items-center text-center" style={{background: "linear-gradient(45deg, black, #0052CC, #0052CC)"}}>
          <h4 className="font-bold text-2xl">Ready to Achieve Your Goals?</h4>
          <p>
            Start your journey to success with expert coaching and<br />
            transform your life today
          </p>
          <Button className="bg-white text-grey-text font-bold mt-4" pill size="lg">Get Started</Button>
        </div>
        <div className="grid grid-cols-5 px-6">
          <div className='col-span-2 flex flex-col gap-4 items-start'>
            <img src={WordMark} />
            <span className='text-lg'>Most reliable coaching system</span>
            <div className="flex gap-2">
              <Icon name="linkedin" bg="#0052CC" size={20} />
              <Icon name="twitter" bg="#0052CC" size={20} />
              <Icon name="instagram" bg="#0052CC" size={20} />
              <Icon name="facebook" bg="#0052CC" size={20} />
            </div>
            <div className='flex flex-col'>
              <span>Support@signansolutions.com</span>
              <span>+234 903 7362 896</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="opacity-60 font-medium mb-2">Company</h5>
            <Link to="">About Us</Link>
            <Link to="">Careers</Link>
            <Link to="">Partners</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="opacity-60 font-medium mb-2">Legal</h5>
            <Link to="">Terms & Conditions</Link>
            <Link to="">Privacy Policy</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="opacity-60 font-medium mb-2">Company</h5>
            <Link to="">FAQs</Link>
            <Link to="">Contact</Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default LayoutFooter