export default interface Comentario {
  id: string;
  postId: string;
  donoId: string;
  conteudo: String;
  curtida: number;
}

export const DUMMY_COMENTARIOS: Comentario[] = [
  {
    id: "1",
    postId: "2",
    donoId: "3",
    conteudo: "A alimentação saudável realmente faz a diferença!",
    curtida: 12,
  },
  {
    id: "2",
    postId: "1",
    donoId: "4",
    conteudo: "Gostei das dicas de produtividade, vou tentar!",
    curtida: 8,
  },
  {
    id: "3",
    postId: "1",
    donoId: "2",
    conteudo: "Produtividade é essencial, obrigado por compartilhar!",
    curtida: 5,
  },
  {
    id: "4",
    postId: "2",
    donoId: "1",
    conteudo: "Vou aplicar essas dicas na minha rotina.",
    curtida: 10,
  },
  {
    id: "5",
    postId: "3",
    donoId: "2",
    conteudo: "Já estou planejando minha próxima viagem!",
    curtida: 18,
  },
  {
    id: "6",
    postId: "4",
    donoId: "3",
    conteudo: "Essas dicas de programação vão me ajudar muito!",
    curtida: 20,
  },
];
