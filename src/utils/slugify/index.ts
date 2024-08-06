const slugify = (text: string) => {
  const regex = /[ *+~.(){}'"!:@/\\]/g;

  return text.toLowerCase().replace(regex, "-");
};

export default slugify;
