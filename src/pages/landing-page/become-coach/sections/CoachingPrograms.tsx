import { Container, Icon } from "@/components/inc";
import { PRIMARY_COLOR } from "@/constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function CoachingPrograms() {
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
      title: "Financial Coaching",
      description:
        "Take charge of your financial future with expert coaching designed to help you budget wisely, save effectively. Whether you're looking to get out of debt, build wealth, financial coaching provides the tools and strategies to achieve lasting financial security.",
    },
    {
      title: "Business Coaching",
      description:
        "Collaborate with our tutors to create valuable content for learners. Whether you have expertise in a niche industry or want to develop co-branded content, we'll work together to deliver impactful educational resources.",
    },
    {
      title: "Life Coaching",
      description:
        "Transform your mindset, set meaningful goals, and create the life you've always envisioned. Life coaching helps you identify your strengths, overcome obstacles, and develop a clear action plan for success.",
    },
    {
      title: "Relationship Coaching",
      description:
        "Promote Learnille to your audience and earn commissions for every successful referral. Share the power of education and consulting while growing your revenue through our affiliate program.",
    },
  ];

  return (
    <Container
      ref={ref}
      className="py-10 max-sm:py-6 flex flex-col gap-2 max-sm:gap-1"
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
        className="grid grid-cols-1 max-sm:gap-4 md:grid-cols-2 gap-6 mt-8 max-sm:mt-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {items.map((item, index) => (
          <Item key={index} {...item} variants={itemVariants} />
        ))}
      </motion.div>
    </Container>
  );
}

function Item({
  title,
  description,
  variants,
}: {
  title: string;
  description: string;
  variants: any;
}) {
  return (
    <motion.div
      className="w-full bg-[#6FB1FC] flex items-end border border-[#6FB1FC] rounded-lg overflow-hidden"
      variants={variants}
    >
      <Icon
        name="arrow_right"
        bg={PRIMARY_COLOR}
        size={20}
        className="!w-12 max-sm:!w-10"
      />
      <div className="w-full h-44 max-sm:h-36 flex flex-col gap-1 justify-center bg-white px-6 max-sm:px-4">
        <h2 className="font-semibold text-base max-sm:text-sm">{title}</h2>
        <p className="text-sm max-sm:text-xs">{description}</p>
      </div>
    </motion.div>
  );
}

export default CoachingPrograms;
