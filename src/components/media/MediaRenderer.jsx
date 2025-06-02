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
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-rojoLogo shadow-lg">
              <FaPlay className="text-xl" />
            </div>
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