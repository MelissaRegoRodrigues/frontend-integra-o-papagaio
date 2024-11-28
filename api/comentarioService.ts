import { DUMMY_COMENTARIOS } from "@/models/Comentario";

export function getAllComentarios() {
  return DUMMY_COMENTARIOS;
}

export function getComentariosByPostId(id: string) {
  return DUMMY_COMENTARIOS.filter((comentario) => comentario.postId === id);
}
