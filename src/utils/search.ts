import Fuse from "fuse.js";
import { getAllPosts } from "./content";
import type { PostMeta } from "@t/content";

const fuse = new Fuse<PostMeta>(getAllPosts(), {
  keys: [
    { name: "title", weight: 3 },
    { name: "tags", weight: 2 },
    { name: "category", weight: 1.5 },
    { name: "description", weight: 1 },
  ],
  threshold: 0.4,
  minMatchCharLength: 1,
});

export function searchPosts(query: string): PostMeta[] {
  if (!query.trim()) return [];
  return fuse.search(query).map((r) => r.item);
}
