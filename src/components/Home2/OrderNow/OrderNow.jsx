import { Link } from "react-router-dom";

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
        <h4 className="text-center text-[21px] md:text-5xl lg:text-[56px] text-cf-yellow font-nunito tracking-tighter leading-relaxed md:w-[86%] lg:w-[90%] xl:max-w-[600px]">
          Get 20% off all beverages from 3 PM to 5 PM every weekday.
        </h4>
        <Link to="/menu">
          <button className="cf-btn text-cf-coffee relative overflow-hidden group mb-1 z-10">
            <img
              className="absolute top-0 -left-8 group-hover:-left-2 transition-all duration-500"
              src="/button-vector-01.svg"
              alt="button hover"
            />
            Order Now
            <img
              className="absolute -bottom-2 -right-10 group-hover:-right-5 transition-all duration-500"
              src="/button-vector-02.svg"
              alt="button hover"
            />
          </button>
        </Link>
      </div>
      {/* end:: order now text container */}
    </div>
  );
};

export default OrderNow;
