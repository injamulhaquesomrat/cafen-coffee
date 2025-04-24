import { cn } from "../../../lib/utils";

const DecorationButtonPrimary = ({ btnText, className }) => {
  return (
    <button
      className={cn(
        `text-sm xs:text-base font-medium leading-[1.2] px-[30px] xs:px-10 py-2.5 xs:py-5 border border-primary rounded-full bg-secondary text-primary relative overflow-hidden group z-10`,
        className
      )}
    >
      <img
        className="absolute -top-1 -left-8 group-hover:-left-4 xs:group-hover:-left-2 transition-all duration-500"
        src="/assets/icons/props/button-vector-01.svg"
        alt="button hover"
      />
      {btnText}
      <img
        className="absolute -bottom-4 -right-10 group-hover:-right-5 xs:group-hover:-right-4 transition-all duration-500"
        src="/assets/icons/props/button-vector-02.svg"
        alt="button hover"
      />
    </button>
  );
};

export default DecorationButtonPrimary;
