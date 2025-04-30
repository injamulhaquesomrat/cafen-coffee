import { useRef } from "react";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const ValuesAccordion = ({ accordionItems }) => {
  const [activeIndices, setActiveIndices] = useState([0]);
  const contentRefs = useRef([]);

  // handle click of the accordion
  const handleClick = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  // set content height when it is open
  const getContentHeight = (index) => {
    return activeIndices.includes(index)
      ? `${contentRefs.current[index]?.scrollHeight}px`
      : "0px";
  };

  return (
    <div className="flex flex-col gap-5 lg:gap-[30px] md:w-[55%] xl:w-[60%]">
      {accordionItems.map((item, index) => (
        <div
          className={`border border-primary text-primary rounded-2xl ${
            activeIndices.includes(index) && "bg-primary text-secondary"
          }`}
          key={index}
        >
          <div
            className="flex justify-between items-center p-4 lg:p-5 rounded-2xl"
            onClick={() => handleClick(index)}
            style={{
              cursor: "pointer",
              fontWeight: activeIndices.includes(index) ? "semibold" : "normal",
            }}
          >
            <h5 className="text-xl md:text-2xl lg:text-[28px] leading-[1.4] font-sober">
              {item.title}
            </h5>
            {activeIndices.includes(index) ? (
              <span>
                <FiMinus className="xs:text-lg md:text-2xl" />
              </span>
            ) : (
              <span>
                <FiPlus className="xs:text-lg md:text-2xl" />
              </span>
            )}
          </div>

          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="overflow-hidden transition-all duration-500"
            style={{ height: getContentHeight(index) }}
          >
            <div className="p-4 lg:p-5 pt-0 lg:pt-0">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ValuesAccordion;
