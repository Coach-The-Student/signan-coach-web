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
    <Container ref={ref} className="flex flex-col gap-6 my-12">
      <motion.div
        className="bg-secondary gap-6 pb-0 rounded-lg flex items-center justify-between"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="w-1/2 flex flex-col justify-center gap-6 pl-16">
          <motion.div className="flex flex-col gap-6" variants={itemVariants}>
            <h3 className="text-3xl font-bold">
              Achieve your goals
              <br />
              with us
            </h3>
            <p className="w-[50%] font-medium text-grey-text text-sm">
              Partner with top coaches, gain expert insights, and access
              powerful tools designed to help you stay focused, overcome
              challenges, and achieve your biggest goals
            </p>
          </motion.div>
          <motion.div className="flex gap-4 w-2/3" variants={itemVariants}>
            <Button
              size="lg"
              variant="ghost"
              className="w-full bg-black text-white rounded-none hover:opacity-80"
            >
              <Icon name="playstore" />
              Get From Playstore
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="w-full bg-black text-white rounded-none hover:opacity-80"
            >
              <Icon name="appstore" />
              Get On Appstore
            </Button>
          </motion.div>
        </div>
        <motion.div variants={itemVariants} className="w-1/2 flex justify-center pt-16">
          <img
            src={AchieveGoalsImage}
            width={400}
          />
        </motion.div>
      </motion.div>
      <div className="flex gap-6">
        <motion.div
          className="w-full bg-secondary p-16 pb-0 rounded-lg flex flex-col items-center justify-between gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="flex flex-col gap-8 items-center"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-center">
              Convenient Scheduling Made
              <br />
              Simple
            </h3>
            <p className="w-[70%] font-medium text-grey-text text-sm text-center">
              Book, reschedule, and manage your coaching sessions effortlessly
              with our intuitive scheduling system—saving you time and keeping
              you on track
            </p>
          </motion.div>
          <motion.img
            src={SchedulingImage}
            width={400}
            variants={itemVariants}
          />
        </motion.div>
        <motion.div
          className="w-full bg-secondary p-16 pb-0 rounded-lg flex flex-col items-center justify-between gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="flex flex-col gap-8 items-center"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-center">
              Track Your Progress with Ease
              <br />
              Ease
            </h3>
            <p className="w-[70%] font-medium text-grey-text text-sm text-center">
              Stay on top of your journey with intuitive progress tracking. Set
              clear milestones, monitor your achievements, and gain actionable
              insights to keep you motivated
            </p>
          </motion.div>
          <motion.img src={TrackProgress} width={400} variants={itemVariants} />
        </motion.div>
      </div>
    </Container>
  );
}

export default AchieveGoals;
