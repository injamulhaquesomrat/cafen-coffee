const EventsGallery = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4">
      {galleryItems.map((item) => (
        <div key={item?.id}>
          <img className="h-full w-full" src={item?.src} alt="gallery image" />
        </div>
      ))}
    </section>
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
