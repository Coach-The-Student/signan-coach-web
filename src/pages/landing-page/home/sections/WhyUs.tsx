import { Button } from "@/components/base";
import { Container, Icon } from "@/components/inc";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function WhyUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Container
      ref={ref}
      className="flex flex-col items-center py-14 min-h-screen gap-8 lg:px-56"
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl max-sm:-mt-10 font-bold text-center">
          Why We are the right choice for you
        </h3>
        <p className="text-center mt-1 ">
          Our team of dedicated professionals works tirelessly to ensure that
          you
          <br />
          receive the best possible experience
        </p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 max-sm:-mt-20 w-full h-full gap-4 max-sm:gap-2 lg:gap-6 text-white">
        <motion.div
          className="bg-primary lg:rounded-xl max-sm:rounded-xl p-4 lg:p-8 max-sm:p-4 max-sm:pb-5 max-sm:h-fit max-sm:mt-24 flex flex-col gap-4 col-span-2 md:col-span-1"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Icon name="graph" size={50} />
          <div className="text-white">
            <h4 className="font-medium text-lg max-sm:text-sm">
              Develop Your Coaching
            </h4>
            <p className="text-sm mt-2 max-sm:text-[10px]">
              Join thousands of coaches live each week as industry thought
              leaders explore the leading edge of coaching
            </p>
          </div>
        </motion.div>
        <motion.div
          className="bg-primary rounded-xl max-sm:rounded-xl p-4 lg:p-8 max-sm:p-4 flex flex-col gap-4 col-span-1"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Icon name="manage" size={50} />
          <div className="text-white">
            <h4 className="font-medium text-lg max-sm:text-sm">
              Manage Your Coaching
            </h4>
            <p className="text-sm max-sm:text-[10px] mt-2">
              Spend less time managing your business and more time coaching your
              clients. Manage, track and measure your entire business in one
              simple to use software.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="bg-[#00398F] rounded-xl max-sm:rounded-xl p-4 lg:p-8 max-sm:p-4 flex flex-col items-start justify-between row-span-2 col-span-1 md:col-span-1"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col gap-4">
            <Icon name="elevate" size={50} />
            <div className="text-white">
              <h4 className="font-medium text-lg max-sm:text-sm">
                Elevate Your Impact
              </h4>
              <p className="text-sm mt-2 max-sm:text-xs">
                Unlock powerful tools and resources that are designed to enhance client engagement,
                foster deeper connections, and drive sustained growth. With our comprehensive suite of solutions,
                you can provide personalized, impactful experiences that resonate with each individual client.
              </p>
            </div>
            <p className="text-sm max-sm:text-xs">
              With us, you can feel confident knowing that your project is in capable hands.
              Our experienced and dedicated team is here to support you every step of the way,
              ensuring that your vision is brought to life with precision and care
            </p>
          </div>
          <Button
            className="bg-white text-grey-text font-bold mt-4 max-sm:mt-3 max-sm:text-sm max-sm:px-4 max-sm:h-10"
            pill
            size="lg"
          >
            Get Started
          </Button>
        </motion.div>
        <motion.div
          className="bg-primary rounded-xl p-4 lg:p-8 max-sm:rounded-xl max-sm:p-4 flex flex-col gap-4 col-span-1 md:col-span-2"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Icon name="scale" size={50} />
          <div className="text-white">
            <h4 className="font-medium text-lg max-sm:text-sm">
              Scale Your Coaching
            </h4>
            <p className="text-sm max-sm:text-[10px] mt-2">
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
