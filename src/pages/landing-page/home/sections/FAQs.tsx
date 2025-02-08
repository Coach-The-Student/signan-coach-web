import { Container, Icon } from '@/components/inc'
import { useState } from 'react'

function FAQs() {
  const faqs = [
    {
      question: "How do I get started with Signan Solution ",
      answer: "Our platform is designed to connect clients with expert coaches across various fields, ensuring you get the right guidance tailored to your personal and professional growth. With an easy-to-use interface, you can sign up in minutes, explore a diverse directory of certified coaches, filter by expertise and availability, and choose the best fit for your needs."
    },
    {
      question: "Who are you",
      answer: "Our platform is designed to connect clients with expert coaches across various fields, ensuring you get the right guidance tailored to your personal and professional growth. With an easy-to-use interface, you can sign up in minutes, explore a diverse directory of certified coaches, filter by expertise and availability, and choose the best fit for your needs."
    },
    {
      question: "Who are you",
      answer: "Our platform is designed to connect clients with expert coaches across various fields, ensuring you get the right guidance tailored to your personal and professional growth. With an easy-to-use interface, you can sign up in minutes, explore a diverse directory of certified coaches, filter by expertise and availability, and choose the best fit for your needs."
    },
    {
      question: "Who are you",
      answer: "Our platform is designed to connect clients with expert coaches across various fields, ensuring you get the right guidance tailored to your personal and professional growth. With an easy-to-use interface, you can sign up in minutes, explore a diverse directory of certified coaches, filter by expertise and availability, and choose the best fit for your needs."
    },
  ]


  return (
    <Container className='flex flex-col items-center py-16'>
      <div></div>
      <h3 className='text-2xl font-bold text-center'>Answers Await: Frequently Asked Questions </h3>
      <p className="text-center mt-1">Unlock Answers to Your Queries: Navigating the Uickly Experience with Confidence and Clarity</p>
      <ul className='w-full mt-6 flex flex-col gap-4'>
        {faqs.map((faq, index) => (
          <FAQ key={index} {...faq} />
        ))}
      </ul>
    </Container>
  )
}

const FAQ = ({
  question,
  answer
}: {question: string, answer: string}) => {
  const [open, setOpen] = useState(false)

  return (
    <li className='px-8 py-6 border w-full flex flex-col gap-4 rounded-lg'>
      <div className='flex justify-between items-center px-2'>
        <div>
          <h5 className='text-md flex gap-4 items-center'>
            <span>&#8226;</span>
            {question}
          </h5>
        </div>
        <button onClick={(() => setOpen(prev => !prev))} className='text-6xl'>
          <Icon name={open ? "minus" : "add"} />
        </button>
      </div>
      {open && <p className='text-sm text-grey-text'>{answer}</p>}
    </li>
  )
}

export default FAQs