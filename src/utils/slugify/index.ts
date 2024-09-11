const slugify = (text: string) => {
  const regex = /[ *+~.(){}'"!,:@/\\]/g;
  const slug = text.toLowerCase().replace(regex, "-").replace(/--/g, "-");
  const trimmedSlug = slug.replace(/^-+|-+$/g, "");

  return trimmedSlug;
};

export default slugify;
