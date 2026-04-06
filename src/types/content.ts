export interface PostMeta {
  title: string;
  description: string;
  date: string;
  subject: "math" | "science";
  category: string;
  level: string;
  tags: string[];
  slug: string;
}
