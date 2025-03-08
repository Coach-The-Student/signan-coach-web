import { Icon } from "@/components/inc";
import { PRIMARY_COLOR } from "@/constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation, useNavigate } from "react-router-dom";

function CoachOrClient() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const type = search.split("=")[1];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Container animation variants
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

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col lg:!p-0 lg:items-center gap-12 max-sm:gap-8 text-center px-4 sm:px-8 md:px-12 lg:px-16 py-12 max-sm:py-8"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.button
        className="flex flex-col gap-2 p-6 max-sm:p-4 bg-secondary items-center rounded-lg hover:bg-opacity-90 transition-colors"
        onClick={() => navigate("/find-coach")}
        variants={itemVariants}
      >
        <Icon
          name="as_client"
          bg={PRIMARY_COLOR}
          className="rounded-full max-sm:size-10"
          size={30}
          padding={20}
        />
        <motion.h4
          className="text-lg max-sm:text-base md:text-lg font-bold"
          variants={itemVariants}
        >
          Proceed as a Client
        </motion.h4>
        <motion.p
          className="text-sm max-sm:text-xs md:text-sm"
          variants={itemVariants}
        >
          Book sessions with ease, stay on top of your schedule, access valuable
          resources
        </motion.p>
      </motion.button>
      <motion.button
        className="flex flex-col gap-2 p-6 max-sm:p-4 bg-secondary items-center rounded-lg hover:bg-opacity-90 transition-colors"
        onClick={() =>
          navigate(
            type === "new_user" ? "/dashboard/register" : "/dashboard/login"
          )
        }
        variants={itemVariants}
      >
        <Icon
          name="as_coach"
          bg={PRIMARY_COLOR}
          className="rounded-full max-sm:size-10"
          size={30}
          padding={20}
        />
        <motion.h4
          className="text-lg max-sm:text-base md:text-lg font-bold"
          variants={itemVariants}
        >
          Proceed as a Coach
        </motion.h4>
        <motion.p
          className="text-sm max-sm:text-xs md:text-sm"
          variants={itemVariants}
        >
          Book sessions with ease, stay on top of your schedule, access valuable
          resources
        </motion.p>
      </motion.button>
    </motion.div>
  );
}

export default CoachOrClient;
