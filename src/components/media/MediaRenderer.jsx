import { FaPlay } from "react-icons/fa";
import Partners from "components/sliders/Partners";

const MediaRenderer = ({ media, alt, title }) => {
  if (!media) return null;

  switch (media.type) {
    case "image":
      return (
        <div className="rounded-xl overflow-hidden">
          <img
            src={media.src}
            alt={alt}
            className="w-full h-80 object-cover"
          />
        </div>
      );
    case "video":
      return (
        <div className="relative aspect-video rounded-xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src={media.src}
            title={title}
            allowFullScreen
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <a 
              href={media.src} target="_blank"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center hover:bg-amarilloLogo transition-colors shadow-lg"
            >
              <FaPlay className="text-white text-2xl md:text-3xl ml-1" />
            </a>
          </div>
        </div>
      );
    case "slider":
      return (
        <div className="rounded-xl overflow-hidden">
          <Partners
            folderName={media.folderName}
            totalImages={media.totalImages}
            altText={media.altText}
            bgColor="bg-white"
          />
        </div>
      );
    default:
      return null;
  }
};

export default MediaRenderer;