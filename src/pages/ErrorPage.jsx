import { Link } from "react-router-dom";
import DecorationButtonPrimary from "../components/shared/Buttons/DecorationButtonPrimary";

const ErrorPage = () => {
  return (
    <div className="bg-foreground sm:max-w-[600px] w-full h-screen m-auto flex items-center justify-center p-4">
      <div className="bg-secondary-foreground p-5 xs:p-10 md:p-[60px] border border-primary rounded-xl text-center text-primary">
        <div className="inline-flex items-center justify-center gap-1">
          <h1 className="text-[100px] sm:text-[140px] font-sober leading-none">
            4
          </h1>
          <img
            className="h-14 w-14 sm:h-[100px] sm:w-[100px]"
            src="/assets/icons/props/settings.svg"
            alt="error zero icon"
          />
          <h1 className="text-[100px] sm:text-[140px] font-sober leading-none">
            4
          </h1>
        </div>
        <h3 className="text-3xl sm:text-[34px] xl:text-[40px] font-sober leading-[1.2] mb-2.5">
          Page Not Found
        </h3>
        <p className="mb-[30px]">
          The page you are looking for doesn&apos;t exist or has been moved
        </p>
        <Link to={"/"}>
          <DecorationButtonPrimary
            className={"w-full"}
            btnText={"Back to home"}
          />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
