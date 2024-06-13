export function mapImages(resources) {
  return resources.map((resource, index) => {
    const { width, height, context } = resource;
    return {
      id: resource.asset_id,
      image: resource.secure_url,
      title: resource.public_id,
      url: resource.url,
      src: resource.url,
      width,
      height,
      alt: context?.alt || "",
      priority: index < 4 ? true : false,
    };
  });
}
