import { useState, useRef, useEffect } from "react";
import Masonry from "react-masonry-css";

const GalleryComponent = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(8);
  const lightboxRef = useRef(null);

  const imageImports = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    src: `/assets/images/beneficiarios/${i + 1}.webp`,
    alt: `Beneficiario ${i + 1}`,
  }));

  const images = imageImports;
  const visibleImagesData = images.slice(0, visibleImages);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (lightboxOpen && lightboxRef.current && !lightboxRef.current.contains(e.target)) {
        closeLightbox();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lightboxOpen]);

  const loadMore = () => {
    setVisibleImages((prev) => prev + 8);
  };

  const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
    640: 1,
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galería de Beneficiarios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce algunos rostros y momentos que nos motivan a seguir luchando contra el hambre.
          </p>
        </div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {visibleImagesData.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover bg-white rounded-2xl"
              />

            </div>
          ))}
        </Masonry>

        {visibleImages < images.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="bg-verdeLogo hover:bg-amarilloLogo hover:text-black text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 cursor-pointer"
            >
              Ver más imágenes
            </button>
          </div>
        )}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div
            ref={lightboxRef}
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col"
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-16 right-0 text-white text-4xl z-10 hover:text-rojoLogo transition-colors cursor-pointer"
            >
              &times;
            </button>
            <div className="flex-grow flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryComponent;