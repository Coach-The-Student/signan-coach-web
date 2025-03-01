import { Button } from "@/components/base";
import { Container, Icon } from "@/components/inc";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function WhyUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Container
      ref={ref}
      className="flex flex-col items-center py-14 min-h-screen h-screen gap-8"
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-center">
          Why We are the right choice for you
        </h3>
        <p className="text-center mt-1">
          Our team of dedicated professionals works tirelessly to ensure that
          you
          <br />
          receive the best possible experience
        </p>
      </motion.div>
      <div className="grid grid-cols-3 grid-rows-2 w-full h-full gap-6 text-white">
        <motion.div
          className="bg-primary rounded-lg p-8 flex flex-col gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Icon name="graph" size={50} />
          <div className="text-white">
            <h4 className="font-medium text-lg">Develop Your Coaching</h4>
            <p className="text-sm mt-2">
              Join thousands of coaches live each week as industry thought
              leaders explore the leading edge of coaching
            </p>
          </div>
        </motion.div>
        <motion.div
          className="bg-primary rounded-lg p-8 flex flex-col gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Icon name="manage" size={50} />
          <div className="text-white">
            <h4 className="font-medium text-lg">Manage Your Coaching</h4>
            <p className="text-sm mt-2">
              Spend less time managing your business and more time coaching your
              clients. Manage, track and measure your entire business in one
              simple to use software.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="bg-[#00398F] rounded-lg p-8 flex flex-col items-start justify-center gap-4 row-span-2"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Icon name="elevate" size={50} />
          <div className="text-white">
            <h4 className="font-medium text-lg">Elevate Your Impact</h4>
            <p className="text-sm mt-2">
              Unlock powerful tools and resources to enhance client engagement,
              boost retention, and deliver transformative coaching experiences.
            </p>
          </div>
          <p className="mt-4">
            With us, you can feel confident knowing that your project is in
            capable hands, and your goals are our top priority
          </p>
          <Button
            className="bg-white text-grey-text font-bold mt-4"
            pill
            size="lg"
          >
            Get Started
          </Button>
        </motion.div>
        <motion.div
          className="bg-primary rounded-lg p-8 flex flex-col gap-4 col-span-2"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Icon name="scale" size={50} />
          <div className="text-white">
            <h4 className="font-medium text-lg">Scale Your Coaching</h4>
            <p className="text-sm mt-2">
              Grow your coaching business with an exclusive listing on the
              world’s largest directory of professional coaches. Create and sell
              coaching packages complete with ecommerce and client onboarding.
            </p>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}

export default WhyUs;
