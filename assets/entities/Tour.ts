export type Tour = {
  id: string;
  title: string;
  desc: string[];
  cover: string;
  imgs: { src: string; alt: string; ar: "3:4" | "4:3" }[];
  book: string;
};

export type Tours = Record<string, Tour>;

export const emptyTour: Tour = {
  id: "",
  title: "",
  cover: "",
  desc: [],
  imgs: [],
  book: "",
};
