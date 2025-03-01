import HowToImage from "@/assets/images/how-to-become-coach.png";
import { Container, Icon } from "@/components/inc";
import { PRIMARY_COLOR } from "@/constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function HowTo() {
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

  const items = [
    {
      title: "Sign Up & Create Your Profile",
      description:
        "Get started by registering on our platform and setting up your coach profile. Showcase your expertise, experience, and coaching style to attract the right clients.",
    },
    {
      title: "Offer Your Coaching Services",
      description:
        "Set your availability, define your packages, and connect with clients through video calls and messaging.",
    },
    {
      title: "Grow & Make an Impact",
      description:
        "Track progress, build relationships, and expand your coaching business with powerful tools.",
    },
  ];

  return (
    <Container
      ref={ref}
      className="bg-secondary py-24 flex justify-between items-center gap-8"
    >
      <motion.img
        src={HowToImage}
        width="40%"
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      />
      <motion.div
        className="w-1/2 flex flex-col gap-5"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 className="text-xl font-bold" variants={itemVariants}>
          How to become a coach
        </motion.h2>
        <motion.p className="text-sm" variants={itemVariants}>
          Join our platform as a coach and share your expertise with a global
          audience. Sign up, create your profile, and start connecting with
          clients who need your guidance. We provide the tools and support to
          help you succeed.
        </motion.p>
        {items.map((item, index) => (
          <Item key={index} {...item} itemVariants={itemVariants} />
        ))}
      </motion.div>
    </Container>
  );
}

function Item({
  title,
  description,
  itemVariants,
}: {
  title: string;
  description: string;
  itemVariants: any;
}) {
  return (
    <motion.div
      className="flex gap-5 px-8 py-6 bg-white"
      variants={itemVariants}
    >
      <Icon
        name="check"
        bg={PRIMARY_COLOR}
        className="rounded-full mt-1"
        size={14}
      />
      <div className="w-[90%] flex flex-col gap-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

export default HowTo;
