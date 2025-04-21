import { useRef } from "react";
import { useState } from "react";
import HeroPausePlayBtn from "../Home/Hero/HeroPausePlayBtn";

const CoffeeMakingVideo = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);

  // handle pause and play
  const handlePlayPause = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsVideoPlaying(!isVideoPlaying);
  };
  return (
    <div className="relative">
      {/* start:: video */}
      <video
        ref={videoRef}
        className=" w-full border-t border-cf-coffee relative z-40 max-h-[715px] min-h-[300px] object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440%2F66c6d79ee0eb0f2859157f1d_Untitled%20video%20-%20Made%20with%20Clipchamp%20%281%29-transcode.mp4"
          type="video/mp4"
        />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag
      </video>
      {/* end:: video */}

      {/* start:: custom pause and playbutton */}
      <HeroPausePlayBtn
        handlePlayPause={handlePlayPause}
        isVideoPlaying={isVideoPlaying}
      />
      {/* end:: custom pause and playbutton */}
    </div>
  );
};

export default CoffeeMakingVideo;
