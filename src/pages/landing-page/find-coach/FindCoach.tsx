import { Container } from "@/components/inc"
import { Coach } from "./components"
import { Link } from "react-router-dom"

function FindCoach() {
  const coaches = [
    {
      photoURL: "",
      name: "James Chadwick",
      location: "United States",
      yearsOfExperience: 3,
      price: 100,
      skill: "Corporate /  Organizational, Executive (Leadership Development)",
      about: "Do you believe that feeling overwhelmed and overstressed is an inevitable part of success? You're responsible for your performance and the performance of others, but consistently achieving goals can lead to burnout and disengagement. I'm a WBECS...",
      tags: ["Accountability", "Business Acumen"]
    },
    {
      photoURL: "",
      name: "James Chadwick",
      location: "United States",
      yearsOfExperience: 3,
      price: 100,
      skill: "Corporate /  Organizational, Executive (Leadership Development)",
      about: "Do you believe that feeling overwhelmed and overstressed is an inevitable part of success? You're responsible for your performance and the performance of others, but consistently achieving goals can lead to burnout and disengagement. I'm a WBECS...",
      tags: ["Accountability", "Business Acumen"]
    }
  ]

  return (
    <Container className="my-44 px-44 flex flex-col gap-8">
      <div className="flex flex-col items-center text-center gap-2">
        <h2 className="text-xl font-bold">Independent Coaches (1500)</h2>
        <p className="text-sm">
          Take one step closer to achieving your personal or professional goals with expert<br />
          guidance, tailored support, and the right tools to help you succeed
        </p>
        <Link to="" className="text-xs text-primary underline">View all</Link>
      </div>
      {coaches.map((coach) => <Coach {...coach} />)}
      <div className="flex flex-col items-center text-center gap-2 mt-8">
        <h2 className="text-xl font-bold">Independent Companies (600)</h2>
        <p className="text-sm">
          Empower your employees to identify their strengths, overcome weaknesses, and<br />
          enhance their skills for greater productivity and success.
        </p>
        <Link to="" className="text-xs text-primary underline">View all</Link>
      </div>
      {coaches.map((coach) => <Coach {...coach} />)}
    </Container>
  )
}

export default FindCoach