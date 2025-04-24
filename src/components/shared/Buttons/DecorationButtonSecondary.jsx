import { cn } from "../../../lib/utils";

const DecorationButtonSecondary = ({ btnText, className }) => {
  return (
    <button
      className={cn(
        `text-sm xs:text-base font-medium leading-[1.2] px-[30px] xs:px-10 py-2.5 xs:py-5 border border-primary rounded-full bg-primary text-secondary relative overflow-hidden group z-10`,
        className
      )}
    >
      <img
        className="absolute -top-1 -left-8 group-hover:-left-4 xs:group-hover:-left-2 transition-all duration-500"
        src="/assets/icons/props/button-vector-01.svg"
        alt="button hover"
      />
      {btnText}
    </button>
  );
};

export default DecorationButtonSecondary;
