export function mapImages(resources) {
  return resources.map((resource, index) => {
    const { width, height, context } = resource;
    return {
      id: resource.asset_id,
      image: resource.secure_url,
      url: resource.url,
      src: resource.url,
      width,
      height,
      alt: context?.alt || "",
      priority: index < 6 ? true : false,
      publicId: resource.public_id,
    };
  });
}
