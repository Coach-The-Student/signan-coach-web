import DashboardImage from "@/assets/images/dashboard.svg";
import { Container } from "@/components/inc";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container
      ref={ref}
      className="w-full min-h-screen max-sm:min-h-fit py-16 max-sm:py-8 flex flex-col items-center gap-4 max-sm:gap-3"
    >
      <motion.div
        className="flex flex-col items-center gap-4 max-sm:gap-3"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1
          className="text-4xl max-sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center"
          variants={itemVariants}
        >
          Focus on coaching, while
          <br />
          we focus on the rest.
        </motion.h1>
        <motion.p
          className="text-base max-sm:text-sm md:text-base text-center"
          variants={itemVariants}
        >
          Your experience is valuable - set your rates,
          <br />
          help others, and earn more.
        </motion.p>
        <motion.img
          src={DashboardImage}
          className="mt-14 max-sm:mt-8 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] h-auto"
          alt="Dashboard Preview"
          variants={itemVariants}
        />
      </motion.div>
    </Container>
  );
}

export default Hero;
