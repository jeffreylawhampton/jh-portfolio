import { useState } from "react";
import PhotoGallery from "@/components/Gallery";
import Lightbox from "yet-another-react-lightbox";
import cloudinary from "@/utils/cloudinary";
import { mapImages } from "@/lib/mapImages";
import "yet-another-react-lightbox/styles.css";
import { getBase } from "@/lib/getBase64";

export default function Page({ images }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(null);

  const openLightbox = (photoIndex) => {
    setIndex(photoIndex);
    setOpen(true);
  };

  return (
    <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
      />

      <PhotoGallery
        layout="masonry"
        photos={images}
        openLightbox={openLightbox}
      />
    </>
  );
}

export async function getStaticProps() {
  const results = await cloudinary.search
    .expression("tags=featured")
    .with_field("context")
    .execute();

  const { resources } = results;
  const images = mapImages(resources);
  const base64s = await Promise.all(
    images.map(async (image) => await getBase(image))
  );

  for (let i = 0; i < images.length; i++) {
    images[i].blurDataURL = base64s[i];
  }

  return {
    props: {
      images,
    },
  };
}
