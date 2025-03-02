import DashboardImage from "@/assets/images/dashboard.svg";
import WaveImage from "@/assets/images/wave.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SubHero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="w-full py-12">
      <motion.div
        className="h-[50%] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <img src={WaveImage} width="100%" />
      </motion.div>
      <motion.div
        className="flex flex-col items-center gap-1 -mt-[12.5%] bg-[#EBF2FB] pt-6 pb-14"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h5
          className="text-primary text-sm font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Ready to Get Started?
        </motion.h5>
        <motion.h3
          className="text-2xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Manage sessions, track progress,
          <br />
          and stay on top of your coaching.
        </motion.h3>
        <motion.img
          src={DashboardImage}
          width="50%"
          className="mt-14"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
      </motion.div>
    </section>
  );
}

export default SubHero;
