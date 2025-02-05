import WaveImage from "@/assets/images/wave.svg"
import DashboardImage from "@/assets/images/dashboard.svg"

function SubHero() {
  return (
    <section className="w-full">
      <div className="h-[50%] flex items-center justify-center">
        <img src={WaveImage} width="100%" />
      </div>
      <div className="flex flex-col items-center gap-1 -mt-[12.5%] bg-[#EBF2FB] pt-6 pb-14">
        <h5 className="text-primary text-sm font-bold">Ready to Get Started?</h5>
        <h3 className="text-2xl font-bold text-center">
          Manage sessions, track progress,<br />
          and stay on top of your coaching.
        </h3>
        <img src={DashboardImage} className="mt-14" />
      </div>
    </section>
  )
}

export default SubHero