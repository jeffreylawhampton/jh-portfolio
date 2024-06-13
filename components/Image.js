import Image from "next/image";

const NextJsImage = ({
  photo,
  imageProps: { alt, title, className, onClick },
  wrapperStyle,
}) => {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <Image
        fill
        priority={photo.priority}
        src={photo}
        sizes="(max-width: 845px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        {...{ alt, title, className, onClick }}
      />
    </div>
  );
};

export default NextJsImage;
