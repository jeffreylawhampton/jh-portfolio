import { CldImage } from "next-cloudinary";

const NextJsImage = ({
  photo,
  imageProps: { alt, title, className, onClick },
  wrapperStyle,
}) => {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <CldImage
        priority={photo.priority}
        height={photo.height}
        loading={photo.priority ? "eager" : "lazy"}
        width={photo.width}
        src={photo.publicId}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder={photo.blurDataURL ? "blur" : "empty"}
        blurDataURL={photo.blurDataURL}
        {...{ alt, title, className, onClick }}
      />
    </div>
  );
};

export default NextJsImage;
