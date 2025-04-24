import { faqItems } from "../../utils/faqItems";
import ValuesAccordion from "../About/ValuesAccordion";

const FaqsContainer = () => {
  return (
    <div className="py-[60px] md:py-20 lg:py-[100px] max-w-[940px] mx-auto">
      <ValuesAccordion accordionItems={faqItems} />
    </div>
  );
};

export default FaqsContainer;
