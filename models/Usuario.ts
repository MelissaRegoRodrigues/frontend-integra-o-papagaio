export default interface Usuario {
  id: string;
  nome: string;
  email: string;
  fotoURL: string;
  username: string;
  seguindo: Usuario[];
  seguidores: Usuario[];
}

export type UsuarioCreation = {
  nome: string;
  email: string;
  password: string;
  username: string;
};
