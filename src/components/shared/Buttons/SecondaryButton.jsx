import { cn } from "../../../lib/utils";

const SecondaryButton = ({ buttonText, className, type = "button" }) => {
  return (
    <button
      type={type}
      className={cn(
        `xs:text-lg font-medium leading-[1.2] px-[30px] xs:px-10 py-2.5 xs:py-5 border border-primary rounded-full hover:bg-primary hover:text-secondary bg-secondary text-primary duration-500 transition-all ease-in-out`,
        className
      )}
    >
      {buttonText}
    </button>
  );
};

export default SecondaryButton;
