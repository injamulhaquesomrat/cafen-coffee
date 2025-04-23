import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-cf-light-white sm:max-w-[600px] w-full h-screen m-auto flex items-center justify-center p-4">
      <div className="bg-cf-light-yellow p-5 border border-cf-coffee rounded-xl text-center text-cf-coffee">
        <div className="inline-flex items-center justify-center gap-1">
          <h1 className="text-[100px] sm:text-[140px] font-sober leading-none">
            4
          </h1>
          <img
            className="h-14 w-14 sm:h-[100px] sm:w-[100px]"
            src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66bf1e93272d9448d7187a46_about-icon-01.svg"
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
          <button className="cf-btn text-cf-coffee relative overflow-hidden group z-10 w-full">
            <img
              className="absolute top-0 -left-8 group-hover:-left-2 transition-all duration-500"
              src="/button-vector-01.svg"
              alt="button hover"
            />
            Back to Home
            <img
              className="absolute -bottom-2 -right-10 group-hover:-right-5 transition-all duration-500"
              src="/button-vector-02.svg"
              alt="button hover"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
