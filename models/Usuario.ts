export default interface Usuario {
  id: string;
  nome: string;
  email: string;
  fotoURL: string;
  username: string;
  seguindo: string[];
  seguidores: string[];
}
