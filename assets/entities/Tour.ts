export type Tour = {
  title: string;
  desc: string[];
  portada: string;
  imgs: {
    src: string;
    alt: string;
    ar: string;
  }[];
  id: string;
  book: string;
};

export type Tours = Record<string, Tour>;
