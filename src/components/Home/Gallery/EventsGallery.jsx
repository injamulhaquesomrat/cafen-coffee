import galleryOne from "/icons/gallery/gallary-image-01.avif";
import galleryTwo from "/icons/gallery/gallary-image-02.avif";
import galleryThree from "/icons/gallery/gallary-image-03.avif";
import galleryFour from "/icons/gallery/gallary-image-04.avif";

const EventsGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      <div>
        <img className="h-full w-full" src={galleryOne} alt="gallery image" />
      </div>
      <div>
        <img className="h-full w-full" src={galleryTwo} alt="gallery image" />
      </div>
      <div>
        <img className="h-full w-full" src={galleryThree} alt="gallery image" />
      </div>
      <div>
        <img className="h-full w-full" src={galleryFour} alt="gallery image" />
      </div>
    </div>
  );
};

export default EventsGallery;
