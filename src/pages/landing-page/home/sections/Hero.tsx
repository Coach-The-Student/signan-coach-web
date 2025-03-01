import HeroImage from "@/assets/images/hero.png";
import { Button } from "@/components/base";
import { Container } from "@/components/inc";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Container
      ref={ref}
      className="min-h-screen flex items-center justify-between px-44"
    >
      <motion.div
        className="flex flex-col items-start gap-8"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex flex-col gap-5"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button pill size="lg" onClick={() => navigate("/set-role")}>
            Get Started
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-sm">Trusted by 300K+ organizations worldwide</p>
        </motion.div>
      </motion.div>
      <motion.img
        src={HeroImage}
        width="45%"
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
    </Container>
  );
}

export default Hero;
