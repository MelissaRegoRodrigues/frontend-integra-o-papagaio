export default interface Post {
  id: string;
  donoId: string;
  comentariosId: string[];
  titulo: string;
  conteudo: string;
  curtidas: number;
  hashtags: string[];
  dataPublicacao: Date;
}

export type PostCreation = Omit<
  Post,
  "id" | "comentariosId" | "curtidas" | "dataPublicacao"
>;
