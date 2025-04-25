import { Link } from "react-router-dom";

const WebsiteInformation = () => {
  return (
    <>
      <div className="border border-primary bg-secondary-foreground p-4 md:p-8 lg:p-5 xl:p-10 gap-8 lg:gap-4 rounded-2xl xl:rounded-[50px] flex flex-col md:flex-row items-center justify-between lg:col-span-8 xl:col-span-7">
        <div className="flex flex-col justify-between lg:w-7/12">
          <div>
            <img src="/assets/logo.svg" alt="footer logo" />
            {/* start::social links  */}
            <div className="flex items-center gap-4 pt-[25px]">
              <Link to="#">
                <img
                  className="h-6 w-6 hover:-translate-y-1 transition-all duration-300"
                  src="/assets/icons/props/facebook-icon.svg"
                  alt="facebook icon"
                />
              </Link>
              <Link to="#">
                <img
                  className="h-6 w-6 hover:-translate-y-1 transition-all duration-300"
                  src="/assets/icons/props/instagram-icon.svg"
                  alt="instagram icon"
                />
              </Link>
              <Link to="#">
                <img
                  className="h-6 w-6 hover:-translate-y-1 transition-all duration-300"
                  src="/assets/icons/props/dribble-icon.svg"
                  alt="dribble icon"
                />
              </Link>
              <Link to="#">
                <img
                  className="h-6 w-6 hover:-translate-y-1 transition-all duration-300"
                  src="/assets/icons/props/twitter-icon.svg"
                  alt="twitter icon"
                />
              </Link>
            </div>
            {/* end::social links */}
          </div>

          {/* start:: opening hours */}
          <div className="flex-1 space-y-2 flex flex-col justify-center my-[30px] xl:my-[50px]">
            <h6 className="font-sober text-primary text-[22px]">
              Opening hours
            </h6>
            <p className="text-primary-foreground text-sm">
              Monday - Friday: 7:00 AM - 8:00 PM
            </p>
            <p className="text-primary-foreground text-sm">
              Saturday - Sunday: 8:00 AM - 6:00 PM
            </p>
          </div>
          {/* end:: opening hours */}

          {/* start:: copyright */}
          <p className="mt-auto text-primary-foreground text-sm">
            Distributed by{" "}
            <a
              href="https://zenui.net/"
              className="underline hover:no-underline font-sober text-primary"
            >
              Zen UI
            </a>{" "}
            © {new Date().getFullYear()} Cafen - All rights reserved
          </p>
          {/* end:: copyright */}
        </div>
        {/* start:; map image */}
        <div className="lg:w-5/12 flex items-center justify-center">
          <img src="/assets/icons/props/footer-image.svg" alt="footer map" />
        </div>
        {/* end:; map image */}
      </div>
    </>
  );
};

export default WebsiteInformation;
