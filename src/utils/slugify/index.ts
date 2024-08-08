const slugify = (text: string) => {
  const regex = /[ *+~.(){}'"!:@/\\]/g;
  const slug = text.toLowerCase().replace(regex, "-");
  const trimmedSlug = slug.replace(/^-+|-+$/g, "");

  return trimmedSlug;
};

export default slugify;
