import { useRef } from "react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ValuesAccordion = ({ accordionItems }) => {
  const [activeIndices, setActiveIndices] = useState([0]);
  const contentRefs = useRef([]);

  const handleClick = (index) => {
    if (activeIndices.includes(index)) {
      // Remove the index if it's already active
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      // Add the index to the list of active indices
      setActiveIndices([...activeIndices, index]);
    }
  };

  const getContentHeight = (index) => {
    return activeIndices.includes(index)
      ? `${contentRefs.current[index]?.scrollHeight}px`
      : "0px";
  };
  return (
    <div className="flex flex-col gap-4">
      {accordionItems.map((item, index) => (
        <div
          className={`border border-cf-coffee text-cf-coffee rounded-2xl ${
            activeIndices.includes(index) && "bg-cf-coffee text-cf-yellow"
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
            <p className="text-xl lg:text-2xl">{item.title}</p>
            {activeIndices.includes(index) ? (
              <span>
                <FaMinus />
              </span>
            ) : (
              <span>
                <FaPlus />
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
