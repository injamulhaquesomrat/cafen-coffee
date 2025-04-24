import { HiArrowRight } from "react-icons/hi";
import { cn } from "../../../lib/utils";

const ButtonArrow = ({ btnText }) => {
  return (
    <button
      className={cn(
        `leading-normal px-5 py-2.5 bg-secondary border border-primary rounded-full inline-flex items-center gap-2.5 group`
      )}
    >
      {btnText}{" "}
      <HiArrowRight className="text-sm group-hover:translate-x-1 transition-all duration-500 ease-in-out" />
    </button>
  );
};

export default ButtonArrow;
