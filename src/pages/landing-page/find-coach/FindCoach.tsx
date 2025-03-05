import { Container } from "@/components/inc";
import { Link } from "react-router-dom";
import { Coach } from "./components";

function FindCoach() {
  const coaches = [
    {
      photoURL: "",
      name: "James Chadwick",
      location: "United States",
      yearsOfExperience: 3,
      price: 100,
      skill: "Corporate / Organizational, Executive (Leadership Development)",
      about:
        "Do you believe that feeling overwhelmed and overstressed is an inevitable part of success? You're responsible for your performance and the performance of others, but consistently achieving goals can lead to burnout and disengagement. I'm a WBECS...",
      tags: ["Accountability", "Business Acumen"],
    },
    {
      photoURL: "",
      name: "James Chadwick",
      location: "United States",
      yearsOfExperience: 3,
      price: 100,
      skill: "Corporate / Organizational, Executive (Leadership Development)",
      about:
        "Do you believe that feeling overwhelmed and overstressed is an inevitable part of success? You're responsible for your performance and the performance of others, but consistently achieving goals can lead to burnout and disengagement. I'm a WBECS...",
      tags: ["Accountability", "Business Acumen"],
    },
  ];

  return (
    <Container className="my-16 max-sm:my-8 px-4 sm:px-12 md:px-24 lg:px-44 flex flex-col gap-10 max-sm:gap-6">
      <div className="flex flex-col items-center text-center gap-2 max-sm:gap-1">
        <h2 className="text-xl max-sm:text-lg md:text-xl lg:text-xl font-bold">
          Independent Coaches (1500)
        </h2>
        <p className="text-sm max-sm:text-xs md:text-sm">
          Take one step closer to achieving your personal or professional goals
          with expert
          <br />
          guidance, tailored support, and the right tools to help you succeed
        </p>
        <Link
          to=""
          className="text-xs max-sm:text-[10px] md:text-xs text-primary underline"
        >
          View all
        </Link>
      </div>
      {coaches.map((coach, index) => (
        <Coach key={index} {...coach} />
      ))}
      <div className="flex flex-col items-center text-center gap-2 max-sm:gap-1 mt-8 max-sm:mt-6">
        <h2 className="text-xl max-sm:text-lg md:text-xl lg:text-xl font-bold">
          Independent Companies (600)
        </h2>
        <p className="text-sm max-sm:text-xs md:text-sm">
          Empower your employees to identify their strengths, overcome
          weaknesses, and
          <br />
          enhance their skills for greater productivity and success.
        </p>
        <Link
          to=""
          className="text-xs max-sm:text-[10px] md:text-xs text-primary underline"
        >
          View all
        </Link>
      </div>
      {coaches.map((coach, index) => (
        <Coach key={index} {...coach} />
      ))}
    </Container>
  );
}

export default FindCoach;
