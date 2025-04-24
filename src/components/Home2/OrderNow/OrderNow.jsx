import { Link } from "react-router-dom";
import DecorationButtonPrimary from "../../shared/Buttons/DecorationButtonPrimary";

const OrderNow = () => {
  return (
    <div className="relative">
      {/* start:: order now background video */}
      <div className="w-full aspect-[16/8] lg:aspect-[16/7] xl:aspect-[16/6] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
        >
          <source
            src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440%2F66de71640b20da8ad02b9340_Untitled%20video%20-%20Made%20with%20Clipchamp%20%285%29%20%281%29-transcode.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440%2F66de71640b20da8ad02b9340_Untitled%20video%20-%20Made%20with%20Clipchamp%20%285%29%20%281%29-transcode.webm"
            type="video/webm"
          />
          Your browser does not support HTML video.
        </video>
      </div>
      {/* end:: order now background video */}

      <div className="min-h-full w-full bg-cf-coffee/20 absolute top-0 left-0 z-40"></div>

      {/* start:: order now text container */}
      <div className="absolute top-0 left-0 p-4 flex flex-col items-center gap-4 lg:gap-8 xl:gap-16 justify-center z-50 h-full w-full">
        <h4 className="text-center text-2xl xs;text-[30px] md:text-5xl lg:text-[56px] xl:text-[60px] text-cf-yellow font-sober leading-[1.2] md:w-[526px] lg:w-[706px] xl:max-w-[570px]">
          Get 20% off all beverages from 3 PM to 5 PM every weekday.
        </h4>
        <Link to="/menu">
          <DecorationButtonPrimary btnText={"Order Now"} />
        </Link>
      </div>
      {/* end:: order now text container */}
    </div>
  );
};

export default OrderNow;
