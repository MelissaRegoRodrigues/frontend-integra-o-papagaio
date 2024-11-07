import { DUMMY_USUARIOS } from "@/models/Usuario";

export function getAllUsuarios() {
  return DUMMY_USUARIOS;
}

export function getUsuarioById(id: string) {
  return DUMMY_USUARIOS.find((usuario) => usuario.id === id);
}
