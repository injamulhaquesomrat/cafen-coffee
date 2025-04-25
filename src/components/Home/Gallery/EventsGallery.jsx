import { useState } from "react";
import { FcSynchronize } from "react-icons/fc";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

const EventsGallery = () => {
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
      <section className="grid grid-cols-2 md:grid-cols-4">
        {galleryItems.map((item, index) => (
          <div key={item?.id} className="overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 cursor-pointer duration-500 transition-all ease-in-out"
              src={item?.src}
              alt="gallery image"
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            />
          </div>
        ))}
      </section>

      {/* Lightbox Slider */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={galleryItems}
        index={currentIndex}
        plugins={[Thumbnails, Zoom, Fullscreen]}
        zoom={{ maxZoomPixelRatio: 3 }}
        thumbnails={{ width: 70, height: 70, ref: thumbnailsRef }}
        carousel={{
          finite: "true",
          spacing: "10px",
          imageFit: "contain",
          preload: galleryItems.length,
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
              className="text-secondary-foreground p-2 hover:rotate-180 transition-all duration-700"
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

export default EventsGallery;

// gallery items
const galleryItems = [
  { id: 1, src: "/assets/images/gallery/gallery-one.avif" },
  { id: 2, src: "/assets/images/gallery/gallery-two.avif" },
  { id: 3, src: "/assets/images/gallery/gallery-three.avif" },
  { id: 4, src: "/assets/images/gallery/gallery-four.avif" },
];
