import { cn } from "../../../lib/utils";

const PrimaryButton = ({ buttonText, className }) => {
  return (
    <button
      className={cn(
        `xs:text-lg font-medium leading-[1.2] px-[30px] xs:px-10 py-2.5 xs:py-5 border border-primary rounded-full bg-primary text-secondary hover:bg-secondary hover:text-primary duration-500 transition-all ease-in-out`,
        className
      )}
    >
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
