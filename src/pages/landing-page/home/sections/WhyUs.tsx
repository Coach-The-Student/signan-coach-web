import { Button } from "@/components/base"
import { Container, Icon } from "@/components/inc"

function WhyUs() {
  return (
    <Container className="flex flex-col items-center py-14 min-h-screen h-screen gap-8">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold text-center">
          Why We are the right choice for you
        </h3>
        <p className="text-center mt-1">
          Our team of dedicated professionals works tirelessly to ensure that you<br />
          receive the best possible experience
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 w-full h-full gap-6 text-white">
        <div className="bg-primary rounded-lg p-8 flex flex-col gap-4">
          <Icon name="graph" size={50} />
          <div className="text-white">
            <h4 className="font-medium text-lg">Develop Your Coaching</h4>
            <p className="text-sm mt-2">Join thousands of coaches live each week as industry thought leaders explore the leading edge of coaching</p>
          </div>
        </div>
        <div className="bg-primary rounded-lg p-8 flex flex-col gap-4">
          <Icon name="manage" size={50} />
          <div className="text-white">
            <h4 className="font-medium text-lg">Manage Your Coaching</h4>
            <p className="text-sm mt-2">Spend less time managing your business and more time coaching your clients. Manage, track and measure your entire business in one simple to use software.</p>
          </div>
        </div>
        <div className="bg-[#00398F] rounded-lg p-8 flex flex-col items-start justify-center gap-4 row-span-2">
          <Icon name="elevate" size={50} />
          <div className="text-white">
            <h4 className="font-medium text-lg">Elevate Your Impact</h4>
            <p className="text-sm mt-2">Unlock powerful tools and resources to enhance client engagement, boost retention, and deliver transformative coaching experiences.</p>
          </div>
          <p className="mt-4">With us, you can feel confident knowing that your project is in capable hands, and your goals are our top priority</p>
          <Button className="bg-white text-grey-text font-bold mt-4" pill size="lg">Get Started</Button>
        </div>
        <div className="bg-primary rounded-lg p-8 flex flex-col gap-4 col-span-2">
          <Icon name="scale" size={50} />
          <div className="text-white">
            <h4 className="font-medium text-lg">Scale Your Coaching</h4>
            <p className="text-sm mt-2">Grow your coaching business with an exclusive listing on the world’s largest directory of professional coaches. Create and sell coaching packages complete with ecommerce and client onboarding.</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default WhyUs