import { getCldImageUrl } from "next-cloudinary";

export const getBase = async (image) => {
  const imageUrl = getCldImageUrl({
    src: image.publicId,
    width: 100, // Resize the original file to a smaller size
  });
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64 = buffer.toString("base64");
  const dataUrl = `data:${response.type};base64,${base64}`;
  return dataUrl;
};
