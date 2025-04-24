import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import SecondaryButton from "../components/shared/Buttons/SecondaryButton";

const ComingSoon = () => {
  return (
    <div className="bg-foreground w-full h-screen sm:flex items-center justify-center p-[30px]">
      <div className="bg-secondary-foreground p-[30px] lg:p-[50px] rounded-xl text-center text-primary md:w-[540px] lg:w-[800px]">
        <div className="inline-flex items-center justify-center gap-1 mb-2.5 xs:mb-5">
          <img
            className="h-[100px] w-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px]"
            src="/public/assets/icons/props/coffee-bean.svg"
            alt="error zero icon"
          />
        </div>
        <h3 className="text-3xl xs:text-5xl xl:text-6xl font-sober leading-[1.2] mb-5">
          We are coming soon!
        </h3>
        <p className="mb-2.5">
          We&apos;re bringing something fresh and exciting to the table. Be the
          first to experience it!
        </p>
        <div className="grid mt-[30px] mb-[15px]">
          <form>
            <input
              className="px-5 py-2.5 mb-2.5 w-4/5 rounded-lg border border-primary-foreground outline-none bg-secondary-foreground text-primary-foreground placeholder:text-primary-foreground col-span-1"
              type="email"
              placeholder="Your Email..."
            />
            <div>
              <SecondaryButton
                className={"md:text-base"}
                buttonText={"Notify me"}
              />
            </div>
          </form>
        </div>

        {/* start:: social links */}
        <div className="flex items-center justify-center gap-1.5 pt-5">
          <span>Follow us: </span>
          <div className="flex items-center justify-center gap-2.5 lg:gap-3">
            <a href="#">
              <AiFillInstagram className="text-[22px] lg:text-3xl hover:-translate-y-1.5 duration-150 transition-all ease-in-out" />
            </a>
            <a href="#">
              <FaFacebookF className="lg:text-2xl hover:-translate-y-1.5 duration-150 transition-all ease-in-out" />
            </a>
            <a href="#">
              <FaSquareXTwitter className="text-[22px] lg:text-3xl hover:-translate-y-1.5 duration-150 transition-all ease-in-out" />
            </a>
          </div>
        </div>
        {/* end:: social links */}
      </div>
    </div>
  );
};

export default ComingSoon;
