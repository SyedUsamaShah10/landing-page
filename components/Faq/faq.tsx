import BottomHeader from "./bottom-header";
import Button from "../UI/button";
import Footer from "../Footer/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../UI/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

function Faq() {
  const faqItems: FaqItem[] = [
    {
      question: "What is the return policy?",
      answer: "You can return your bike within 30 days for a full refund.",
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we have several financing options available at checkout.",
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery usually takes between 3-5 business days.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "You can cancel your order before it ships by contacting our support team.",
    },
    {
      question: "Are there any maintenance services?",
      answer: "Yes, we offer maintenance packages with free tune-ups.",
    },
  ];

  return (
    <div id="faqs" className="flex flex-col items-center mt-20 px-4">
      <section className="text-center mb-8">
        <h1 className="font-inter text-4xl text-bg-100 font-bold leading-tight">
          Frequently asked questions
        </h1>
        <p className="font-inter text-lg text-bg-200 font-medium mt-2">
          Find answers to common questions about our bikes, services, and more.
        </p>
      </section>

      {/* Accordion */}
      <Accordion type="multiple" className="w-full max-w-4xl">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b border-bg-900"
          >
            <AccordionTrigger className="flex justify-between items-center py-4 px-4 text-bg-200 text-lg font-medium transition-colors duration-200 rounded-md">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-bg-200 ">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Content */}
      <div className="mt-20 flex flex-col items-center">
        <h1 className="font-inter text-4xl text-bg-100 font-bold leading-10 tracking-wide text-center">
          Still have questions?
        </h1>
        <p className="font-inter text-lg text-bg-200 font-medium mt-7 mb-6 leading-7 tracking-wide text-center">
          Support details to capture customers that might be on the fence.
        </p>
        <Button label="Contact" variant="outlined" />
      </div>

      {/* header */}
      <BottomHeader />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Faq;
