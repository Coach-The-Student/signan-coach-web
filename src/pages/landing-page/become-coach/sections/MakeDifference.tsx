import EarnLiveImage from "@/assets/images/earn-live.svg";
import MentorEmpowerImage from "@/assets/images/mentor-empower.svg";
import { Container } from "@/components/inc";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function MakeDifference() {
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
      className="py-12 max-sm:py-8 flex flex-col gap-2 max-sm:gap-1 px-4 sm:px-12 md:px-24 lg:px-[300px]"
    >
      <motion.h1
        className="text-3xl max-sm:text-xl md:text-2xl lg:text-3xl font-bold text-center"
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        Our Coaching Programs
      </motion.h1>
      <motion.p
        className="text-base max-sm:text-sm md:text-base text-center"
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        Let's build the future of learning and professional
        <br />
        coaching together!
      </motion.p>
      <motion.div
        className="flex flex-col md:flex-row justify-center gap-10 max-sm:gap-6 text-white mt-8 max-sm:mt-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div
          className="p-8 max-sm:p-6 bg-primary w-full md:w-fit flex flex-col gap-2 max-sm:gap-1 rounded-lg"
          variants={itemVariants}
        >
          <img
            src={MentorEmpowerImage}
            className="w-full max-w-[200px] max-sm:max-w-full md:max-w-[250px] h-auto"
            alt="Mentor & Empower"
          />
          <h3 className="text-2xl max-sm:text-lg md:text-xl lg:text-2xl font-semibold mt-2">
            Mentor &<br /> Empower Others
          </h3>
          <p className="text-sm max-sm:text-xs md:text-sm">
            Change thousands of lives with your knowledge. As a consultant, you
            don’t just offer advice, you open doors to new opportunities. Lead
            others to success and create a legacy of growth, starting today!
          </p>
        </motion.div>
        <motion.div
          className="p-8 max-sm:p-6 bg-[#0A2E4A] w-full md:w-fit flex flex-col gap-2 max-sm:gap-1 rounded-lg"
          variants={itemVariants}
        >
          <img
            src={EarnLiveImage}
            className="w-full max-w-[200px] max-sm:max-w-full md:max-w-[250px] h-auto"
            alt="Earn & Live Greatly"
          />
          <h3 className="text-2xl max-sm:text-lg md:text-xl lg:text-2xl font-semibold mt-2">
            Earn & Live Greatly
          </h3>
          <p className="text-sm max-sm:text-xs md:text-sm">
            Consulting isn’t just a job. It is a fulfilling way to turn your
            expertise into income. Shape futures, guide careers, and grow your
            wealth, all while doing what you love. Make a difference, and let
            your impact fuel your success.
          </p>
        </motion.div>
      </motion.div>
    </Container>
  );
}

export default MakeDifference;
