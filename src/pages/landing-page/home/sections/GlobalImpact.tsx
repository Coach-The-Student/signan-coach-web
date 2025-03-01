import GlobalImapctImage from "@/assets/images/global-impact.svg";
import { Button } from "@/components/base";
import { Container } from "@/components/inc";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function GlobalImpact() {
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
    <Container ref={ref} className="flex items-center py-12">
      <motion.div
        className="w-full flex flex-col gap-6 items-start"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h3 className="text-2xl font-bold" variants={itemVariants}>
          Make a Global Impact as a
          <br />
          Coach with Signan Solution
        </motion.h3>
        <motion.p className="text-sm w-2/3" variants={itemVariants}>
          Join a global network of professional coaches and expand your reach
          with Signan Solution. Empower clients worldwide, grow your coaching
          business, and access innovative tools to create lasting impact across
          industries
        </motion.p>
        <motion.div variants={itemVariants}>
          <Button pill size="lg">
            Become A Coach
          </Button>
        </motion.div>
      </motion.div>
      <motion.img
        src={GlobalImapctImage}
        width="50%"
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      />
    </Container>
  );
}

export default GlobalImpact;
