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
      className="w-full min-h-screen py-16 flex flex-col items-center gap-4"
    >
      <motion.div
        className="flex flex-col items-center gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1
          className="text-4xl font-bold text-center"
          variants={itemVariants}
        >
          Focus on coaching, while
          <br />
          we focus on the rest.
        </motion.h1>
        <motion.p className="text-center" variants={itemVariants}>
          Your experience is valuable - set your rates,
          <br />
          help others, and earn more.
        </motion.p>
        <motion.img
          src={DashboardImage}
          className="mt-14"
          width="60%"
          variants={itemVariants}
        />
      </motion.div>
    </Container>
  );
}

export default Hero;
