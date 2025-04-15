import ValuesAccordion from "../About/ValuesAccordion";

const FaqsContainer = () => {
  return (
    <div className="py-[60px] sm:py-20 lg:py-[100px] max-w-[940px] mx-auto">
      <ValuesAccordion accordionItems={accordionItems} />
    </div>
  );
};

export default FaqsContainer;

// our faqs accordion items
const accordionItems = [
  {
    id: 1,
    title: "What are your daily specials?",
    content:
      "We have daily specials that change regularly. Check our website or ask our staff for the latest offerings.",
  },
  {
    id: 2,
    title: "Do you offer any non-dairy milk options?",
    content:
      "Yes, we offer a variety of non-dairy milk options including almond, oat, and soy milk. Just ask our baristas when you order!",
  },
  {
    id: 3,
    title: "Can I place an order for pickup or delivery?",
    content:
      "Yes, you can place an order for pickup through our website or app. Delivery options may vary by location.",
  },
  {
    id: 4,
    title: "Do you host private events or private parties?",
    content:
      "Yes, our café is available for private events. Please contact us for more details and to check availability.",
  },
  {
    id: 5,
    title: "Do you have a loyalty program?",
    content:
      "Yes, we have a loyalty program that rewards you with points for every purchase. Sign up in-store or through our app!",
  },
  {
    id: 6,
    title: "What are your hours of operation?",
    content:
      "Our hours of operation vary by location. Please check our website or contact your nearest café for specific hours.",
  },
  {
    id: 7,
    title: "Do you offer gluten-free options?",
    content:
      "Yes, we have gluten-free options available on our menu. Please ask our staff for recommendations.",
  },
  {
    id: 8,
    title: "Can I bring my pet to the café?",
    content:
      "We love pets! However, please check with your local café as pet policies may vary by location.",
  },
];
