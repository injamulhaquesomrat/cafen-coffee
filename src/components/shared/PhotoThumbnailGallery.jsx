import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { FcSynchronize } from "react-icons/fc";

const PhotoThumbnailGallery = ({slides}) => {
    
  const [open, setOpen] = useState(false);
  const thumbnailsRef = useState(null);
  const [thumbnailsVisible, setThumbnailsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleThumbnails = () => {
    setThumbnailsVisible(!thumbnailsVisible);
    const thumbnailContainer = document.querySelector(
      ".yarl__thumbnails_track"
    );
    if (thumbnailContainer) {
      thumbnailContainer.classList.toggle("hidden");
    }
  };
    return (
        <>
          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-2">
            {slides.map((slide, index) => (
              <img
                className="h-full w-full object-cover cursor-pointer"
                key={index}
                src={slide.src}
                alt={`Thumbnail ${index}`}
                onClick={() => {
                  setCurrentIndex(index);
                  setOpen(true);
                }}
              />
            ))}
          </div>

          {/* Lightbox Slider */}
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={slides}
            index={currentIndex}
            plugins={[Thumbnails, Zoom, Fullscreen]}
            zoom={{ maxZoomPixelRatio: 3 }}
            thumbnails={{ width: 70, height: 70, ref: thumbnailsRef }}
            carousel={{
              finite: "true",
              spacing: "10px",
              imageFit: "contain",
              preload: slides.length,
            }}
            styles={{
              container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
              thumbnailsContainer: {
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                border: "0",
              },
            }}
            toolbar={{
              buttons: [
                <button
                  className="text-cf-light-yellow p-2 hover:rotate-180 transition-all duration-500"
                  key="toggle-thumbnails"
                  onClick={toggleThumbnails}
                >
                  <FcSynchronize size={24} />
                </button>,
                "close",
              ],
            }}
            captions={{
              title: (slide) => slide.title,
              description: (slide) => slide.description,
            }}
            controller={{
              closeOnBackdropClick: true,
            }}
          />
        </>
    );
};

export default PhotoThumbnailGallery;