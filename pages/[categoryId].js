import { useState } from "react";
import cloudinary from "@/utils/cloudinary";
import { categories } from "@/lib/data";
import { getBase } from "@/lib/getBase64";
import { mapImages } from "@/lib/mapImages";
import PhotoGallery from "@/components/Gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Category = ({ images }) => {
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
};

export default Category;

export async function getStaticPaths() {
  const paths = categories.map((category) => {
    const categoryId = category.name.toLowerCase().replace(/ /g, "-");
    return {
      params: {
        categoryId,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const categoryId = params.categoryId.replace(/\-/g, "+");
  const results = await cloudinary.search
    .expression(`folder=${categoryId}`)
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
