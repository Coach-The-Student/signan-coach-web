import AchieveGoalsImage from "@/assets/images/achieve-goals.svg";
import SchedulingImage from "@/assets/images/scheduling.svg";
import TrackProgress from "@/assets/images/track-progress.svg";
import { Button } from "@/components/base";
import { Container, Icon } from "@/components/inc";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AchieveGoals() {
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
    <Container ref={ref} className="flex flex-col gap-6 my-12 max-sm:my-8">
      {/* Top Section */}
      <motion.div
        className="bg-secondary gap-6 pb-0 rounded-lg flex flex-col max-sm:flex-col md:flex-row items-center justify-between"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 pl-4 md:pl-16 max-sm:p-6">
          <motion.div
            className="flex flex-col gap-4 md:gap-6"
            variants={itemVariants}
          >
            <h3 className="text-2xl max-sm:text-xl md:text-3xl font-bold">
              Achieve your goals
              <br />
              with us
            </h3>
            <p className="w-full md:w-[50%] font-medium text-grey-text text-xs md:text-sm">
              Partner with top coaches, gain expert insights, and access
              powerful tools designed to help you stay focused, overcome
              challenges, and achieve your biggest goals
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col md:flex-row gap-4 w-full md:w-2/3"
            variants={itemVariants}
          >
            <Button
              size="lg"
              variant="ghost"
              className="w-full bg-black text-white rounded-none hover:opacity-80 text-sm md:text-base"
            >
              <Icon name="playstore" />
              Get From Playstore
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="w-full bg-black text-white rounded-none hover:opacity-80 text-sm md:text-base"
            >
              <Icon name="appstore" />
              Get On Appstore
            </Button>
          </motion.div>
        </div>
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/2 flex justify-center pt-6 md:pt-16 max-sm:pb-6"
        >
          <img
            src={AchieveGoalsImage}
            className="w-full max-w-[300px] md:max-w-[400px] h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Bottom Grid Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Scheduling Section */}
        <motion.div
          className="w-full bg-secondary p-6 md:p-16 pb-0 md:pb-0 rounded-lg flex flex-col items-center justify-between gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="flex flex-col gap-6 md:gap-8 items-center"
            variants={itemVariants}
          >
            <h3 className="text-lg max-sm:text-base md:text-xl font-bold text-center">
              Convenient Scheduling Made
              <br />
              Simple
            </h3>
            <p className="w-full md:w-[70%] font-medium text-grey-text text-xs md:text-sm text-center">
              Book, reschedule, and manage your coaching sessions effortlessly
              with our intuitive scheduling system—saving you time and keeping
              you on track
            </p>
          </motion.div>
          <motion.img
            src={SchedulingImage}
            className="w-full max-w-[300px] md:max-w-[400px] h-auto"
            variants={itemVariants}
          />
        </motion.div>

        {/* Track Progress Section */}
        <motion.div
          className="w-full bg-secondary p-6 md:p-16 pb-0 md:pb-0 rounded-lg flex flex-col items-center justify-between gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="flex flex-col gap-6 md:gap-8 items-center"
            variants={itemVariants}
          >
            <h3 className="text-lg max-sm:text-base md:text-xl font-bold text-center">
              Track Your Progress with
              <br />
              Ease
            </h3>
            <p className="w-full md:w-[70%] font-medium text-grey-text text-xs md:text-sm text-center">
              Stay on top of your journey with intuitive progress tracking. Set
              clear milestones, monitor your achievements, and gain actionable
              insights to keep you motivated
            </p>
          </motion.div>
          <motion.img
            src={TrackProgress}
            className="w-full max-w-[300px] md:max-w-[400px] h-auto"
            variants={itemVariants}
          />
        </motion.div>
      </div>
    </Container>
  );
}

export default AchieveGoals;
