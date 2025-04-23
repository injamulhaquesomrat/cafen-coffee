import { Link } from "react-router-dom";

const WebsiteInformation = () => {
  return (
    <>
      <div className="border border-cf-coffee bg-cf-light-yellow p-4 md:p-8 lg:p-5 xl:p-10 gap-8 lg:gap-4 rounded-2xl xl:rounded-[50px] flex flex-col md:flex-row items-center justify-between lg:col-span-8 xl:col-span-7">
        <div className="flex flex-col justify-between lg:w-7/12">
          <div>
            <img src="/logo.svg" alt="footer logo" />
            {/* start::social links  */}
            <div className="flex items-center gap-4 pt-[25px]">
              <Link to="#">
                <img
                  className="h-6 w-6 hover:-translate-y-1 transition-all duration-300"
                  src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66b9dff7361ea25322579388_facebook.svg"
                  alt="facebook icon"
                />
              </Link>
              <Link to="#">
                <img
                  className="h-6 w-6 hover:-translate-y-1 transition-all duration-300"
                  src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66b9dff69faf75adbbe76dac_instagram.svg"
                  alt="instagram icon"
                />
              </Link>
              <Link to="#">
                <img
                  className="h-6 w-6 hover:-translate-y-1 transition-all duration-300"
                  src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66b9dff5bbda84c872361580_dribble.svg"
                  alt="dribble icon"
                />
              </Link>
              <Link to="#">
                <img
                  className="h-6 w-6 hover:-translate-y-1 transition-all duration-300"
                  src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66b9dff61c1404aa7ba991cc_twitter.svg"
                  alt="twitter icon"
                />
              </Link>
            </div>
            {/* end::social links */}
          </div>

          {/* start:: opening hours */}
          <div className="flex-1 space-y-2 flex flex-col justify-center my-[30px] xl:my-[50px]">
            <h6 className="font-sober text-cf-coffee text-[22px]">
              Opening hours
            </h6>
            <p className="text-cf-coffee text-sm">
              Monday - Friday: 7:00 AM - 8:00 PM
            </p>
            <p className="text-cf-coffee text-sm">
              Saturday - Sunday: 8:00 AM - 6:00 PM
            </p>
          </div>
          {/* end:: opening hours */}

          {/* start:: copyright */}
          <p className="mt-auto text-cf-coffee text-sm">
            Developed by{" "}
            <a
              href="https://github.com/injamulhaquesomrat"
              className="underline hover:no-underline font-sober"
            >
              Injamul Haque Somrat
            </a>{" "}
            © 2025 Cafen - All rights reserved
          </p>
          {/* end:: copyright */}
        </div>
        {/* start:; map image */}
        <div className="lg:w-5/12 flex items-center justify-center">
          <img src="/footer-image.svg" alt="footer map" />
        </div>
        {/* end:; map image */}
      </div>
    </>
  );
};

export default WebsiteInformation;
