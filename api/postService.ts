import { DUMMY_POSTS } from "@/models/Post";

export function getAllPosts() {
  return DUMMY_POSTS;
}

export function getPostById(id: string) {
  return DUMMY_POSTS.find((post) => post.id === id);
}
