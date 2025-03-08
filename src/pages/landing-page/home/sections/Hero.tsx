import HeroImage from "@/assets/images/hero.png";
import { Button } from "@/components/base";
import { Container, Icon } from "@/components/inc";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Container
      ref={ref}
      className="min-h-screen max-sm:min-h-fit flex flex-col max-sm:mt-10 lg:flex-row items-center pt-12 lg:justify-between px-4 md:px-8 lg:px-44 w-full lg:w-11/12 mx-auto"
    >
      <motion.div
        className="flex flex-col items-center lg:items-start gap-8 text-center lg:text-left w-full lg:w-1/2"
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold lg:leading-[55px]">
            Empowering Lives
            <br />
            Through Coaching
            <br />
            Globally
          </h2>
          <p className="text-xs md:text-sm lg:text-base">
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
          <Button
            pill
            className="h-fit p-3"
            size="lg"
            onClick={() => navigate("/set-role")}
            iconRight={<Icon name="arrow_forward" size={16} />}
          >
            Get Started
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-xs max-sm:hidden md:text-sm">
            Trusted by 300K+ organizations worldwide
          </p>
        </motion.div>
      </motion.div>
      <motion.img
        src={HeroImage}
        className="mt-4 lg:mt-0 w-11/12 lg:w-1/2 mx-auto lg:mx-0"
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
    </Container>
  );
}

export default Hero;
