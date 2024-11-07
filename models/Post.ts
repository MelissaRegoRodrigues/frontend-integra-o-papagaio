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

export const DUMMY_POSTS: Post[] = [
  {
    id: "1",
    donoId: "1",
    comentariosId: ["2", "3"],
    titulo: "Como melhorar sua produtividade",
    conteudo:
      "Neste post, vamos explorar algumas técnicas para aumentar sua produtividade no dia a dia.",
    curtidas: 120,
    hashtags: ["#produtividade", "#trabalho", "#dicas"],
    dataPublicacao: new Date(),
  },
  {
    id: "2",
    donoId: "2",
    comentariosId: ["1", "4"],
    titulo: "A importância da alimentação saudável",
    conteudo:
      "Uma alimentação balanceada é fundamental para manter uma vida saudável e ativa.",
    curtidas: 85,
    hashtags: ["#saúde", "#alimentação", "#bemestar"],
    dataPublicacao: new Date("2024-10-15T10:30:00Z"),
  },
  {
    id: "3",
    donoId: "3",
    comentariosId: ["5"],
    titulo: "Dicas de viagem para 2025",
    conteudo:
      "Confira os melhores destinos para viajar em 2025 e aproveitar suas férias ao máximo.",
    curtidas: 150,
    hashtags: ["#viagem", "#destinos", "#férias"],
    dataPublicacao: new Date("2024-09-25T08:00:00Z"),
  },
  {
    id: "4",
    donoId: "4",
    comentariosId: ["6"],
    titulo: "Como aprender programação rapidamente",
    conteudo:
      "Aprenda a programar com dicas e recursos que podem acelerar seu aprendizado.",
    curtidas: 200,
    hashtags: ["#programação", "#tecnologia", "#aprendizado"],
    dataPublicacao: new Date("2024-10-10T14:45:00Z"),
  },
];
