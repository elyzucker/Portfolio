export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  tools: string[];
  process: string;
  objectives: string[];
};

export type Skill = {
  category: string;
  items: {
    name: string;
    level: number;
  }[];
};