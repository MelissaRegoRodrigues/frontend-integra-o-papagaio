import Post from "@/models/Post";

const URL = "https://dcf6-200-133-1-75.ngrok-free.app/api/posts";

export async function getAllPosts() {
  const response = await fetch(URL);

  if (!response.ok)
    throw new Error(
      "Algo deu errado no getAllPosts " + { cause: response.text }
    );

  const data = await response.json();
  return data as Post[];
}

export async function getPostById(postId: string) {
  const response = await fetch(URL + `/${postId}`);

  if (!response.ok)
    throw new Error("Algo deu errado " + { cause: response.text });

  const data = await response.json();
  return data as Post;
}
