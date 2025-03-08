import FAQImage from "@/assets/images/faq.svg";
import { Container, Icon } from "@/components/inc";
import { useState } from "react";

function FAQs() {
  const faqs = [
    {
      question: "How do I get started with Signan Solution?",
      answer:
        "Our platform is designed to connect clients with expert coaches across various fields, ensuring you get the right guidance tailored to your personal and professional growth. With an easy-to-use interface, you can sign up in minutes, explore a diverse directory of certified coaches, filter by expertise and availability, and choose the best fit for your needs.",
    },
    {
      question:
        "What types of coaching services are offered on Signan Solution?",
      answer:
        "Signan Solution offers a wide range of coaching services, including career coaching, executive coaching, life coaching, health and wellness coaching, leadership development, and more. Our platform ensures that there is a coach for every personal and professional need.",
    },
    {
      question: "How do I choose the right coach for me?",
      answer:
        "Choosing the right coach is simple on our platform. You can filter coaches by their expertise, availability, coaching style, and ratings. Additionally, each coach’s profile includes detailed information about their qualifications, experience, and client feedback to help you make an informed decision.",
    },
    {
      question: "How do I book a session with a coach?",
      answer:
        "Once you've selected a coach, simply check their availability on their profile page. You can then book a session directly through the platform. Payment and session scheduling are streamlined to ensure a smooth experience.",
    },
    {
      question: "What if I need to reschedule or cancel a coaching session?",
      answer:
        "We understand that schedules can change. If you need to reschedule or cancel a session, you can do so up to 24 hours before the scheduled session without penalty. After this period, our cancellation policy will apply.",
    },
    {
      question: "Is there a way to track my progress with my coach?",
      answer:
        "Yes! Our platform allows you to track your coaching progress through notes, session summaries, and goal-setting tools. You can collaborate with your coach to set measurable milestones and monitor improvements over time.",
    },
  ];

  return (
    <Container className="flex flex-col items-center py-10 max-sm:py-6 lg:px-56">
      <img
        src={FAQImage}
        alt="FAQ Illustration"
        className="w-full max-w-[180px] md:max-w-[220px] h-auto mb-3 max-sm:mb-1"
      />
      <h3 className="text-lg max-sm:text-base md:text-xl font-bold text-center mt-1">
        Answers Await: Frequently Asked Questions
      </h3>
      <p className="text-center mt-1 text-xs max-sm:text-[10px] md:text-sm text-grey-text">
        Unlock Answers to Your Queries: Navigating the Signan Solution
        Experience with Confidence and Clarity
      </p>
      <ul className="w-full mt-4 max-sm:mt-3 flex flex-col gap-3 max-sm:gap-2">
        {faqs.map((faq, index) => (
          <li key={index}>
            <FAQ question={faq.question} answer={faq.answer} />
          </li>
        ))}
      </ul>
    </Container>
  );
}

const FAQ = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      className="px-4 max-sm:px-3 py-3 max-sm:py-2 border w-full flex flex-col gap-2 max-sm:gap-1 rounded-lg text-left"
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="flex justify-between items-center px-1 max-sm:px-0">
        <h5 className="text-sm max-sm:text-xs md:text-base font-medium flex gap-2 max-sm:gap-1 items-center">
          <span className="text-base max-sm:text-sm">•</span>
          {question}
        </h5>
        <Icon name={open ? "minus" : "add"} size={20} />
      </div>
      {open && (
        <p className="text-xs max-sm:text-[10px] md:text-sm text-grey-text px-1 max-sm:px-0 lg:pt-2">
          {answer}
        </p>
      )}
    </button>
  );
};

export default FAQs;
