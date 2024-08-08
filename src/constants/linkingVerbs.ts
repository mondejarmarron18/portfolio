const linkingVerbs = [
  "is",
  "are",
  "was",
  "were",
  "be",
  "being",
  "been",
  "am",
  "become",
  "seem",
  "appear",
  "grow",
  "turn",
  "stay",
  "remain",
  "prove",
  "get",
] as const;

export type LinkingVerb = (typeof linkingVerbs)[number];

export default linkingVerbs;
