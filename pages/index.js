import { useState } from "react";
import PhotoGallery from "@/components/Gallery";
import Lightbox from "yet-another-react-lightbox";
import { Inter } from "next/font/google";
import cloudinary from "@/utils/cloudinary";
import { mapImages } from "@/lib/mapImages";
import "yet-another-react-lightbox/styles.css";

const inter = Inter({ subsets: ["latin"] });

export default function Page({ images, folders }) {
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
  const { folders } = await cloudinary.api.root_folders();
  return {
    props: {
      images,
      folders,
    },
  };
}
