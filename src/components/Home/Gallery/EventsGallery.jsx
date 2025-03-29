// gallery items
const galleryItems = [
  { id: 1, src: "/icons/gallery/gallary-image-01.avif" },
  { id: 2, src: "/icons/gallery/gallary-image-02.avif" },
  { id: 3, src: "/icons/gallery/gallary-image-03.avif" },
  { id: 4, src: "/icons/gallery/gallary-image-04.avif" },
];

const EventsGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      {galleryItems.map((item) => (
        <div key={item?.id}>
          <img className="h-full w-full" src={item?.src} alt="gallery image" />
        </div>
      ))}
    </div>
  );
};

export default EventsGallery;
