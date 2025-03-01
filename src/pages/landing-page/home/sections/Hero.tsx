import HeroImage from "@/assets/images/hero.png";
import { Button } from "@/components/base";
import { Container } from "@/components/inc";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <Container className="min-h-screen flex items-center justify-between px-44">
      <div className="flex flex-col items-start gap-8">
        <div className="flex flex-col gap-5">
          <h2 className="text-6xl font-bold">
            Empowering Lives
            <br />
            Through Coaching
            <br />
            Globally
          </h2>
          <p>
            Get expert guidance, personalized coaching, and AI-powered
            <br />
            insights to help you achieve your goals faster
          </p>
        </div>
        <Button pill size="lg" onClick={() => navigate("/set-role")}>
          Get Started
        </Button>
        <div>
          <p className="text-sm">
            Trusted by 300K+ organizations worldwide
          </p>
        </div>
      </div>
      <img src={HeroImage} width="45%" />
    </Container>
  );
}

export default Hero;
