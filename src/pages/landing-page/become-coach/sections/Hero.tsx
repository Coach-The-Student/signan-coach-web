import DashboardImage from "@/assets/images/dashboard.svg"
import { Container } from "@/components/inc"

function Hero() {
  return (
    <Container className="w-full py-16 flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold text-center">
        Focus on coaching, while<br />
        we focus on the rest.
      </h1>
      <p className="text-center">
        Your experience is valuable - set your rates,<br />
        help others, and earn more.
      </p>
      <img src={DashboardImage} className="mt-14" width="60%" />
    </Container>
  )
}

export default Hero