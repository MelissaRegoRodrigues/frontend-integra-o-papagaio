import Post, { PostCreation } from "@/models/Post";

const URL =
  "https://e346-2804-29b8-524e-908-886a-49e1-9ec7-75f8.ngrok-free.app/api/posts";

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

export async function getMeusPosts(usuarioId: string) {
  console.log("meus posts", URL + `/seguidor/${usuarioId}`);

  const response = await fetch(URL + `/seguidor/${usuarioId}`);

  if (!response.ok)
    throw new Error("Algo deu errado " + { cause: response.text });

  const data = await response.json();
  console.log(data);

  return data as Post[];
}

export async function criarPost(novoPost: PostCreation) {
  console.log(novoPost);

  const response = await fetch(URL, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(novoPost),
  });

  if (!response.ok)
    throw new Error("Algo deu errado " + { cause: response.text });

  const data = await response.json();
  console.log(data);

  return data as Post;
}
