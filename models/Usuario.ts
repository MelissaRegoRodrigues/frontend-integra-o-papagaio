export default interface Usuario {
  id: string;
  nome: string;
  email: string;
  fotoURL: string;
  username: string;
  seguindoIds: string[];
  seguidoresIds: string[];
}

export const DUMMY_USUARIOS: Usuario[] = [
  {
    id: "1",
    nome: "Ana Souza",
    email: "ana.souza@example.com",
    fotoURL: "https://avatar.iran.liara.run/public",
    username: "ana_souza",
    seguindoIds: ["2", "3"],
    seguidoresIds: ["4", "2"],
  },
  {
    id: "2",
    nome: "Carlos Oliveira",
    email: "carlos.oliveira@example.com",
    fotoURL: "https://avatar.iran.liara.run/public",
    username: "carlos_oliveira",
    seguindoIds: ["1", "4"],
    seguidoresIds: ["1", "3"],
  },
  {
    id: "3",
    nome: "Beatriz Costa",
    email: "beatriz.costa@example.com",
    fotoURL: "https://avatar.iran.liara.run/public",
    username: "beatriz_costa",
    seguindoIds: ["1", "4"],
    seguidoresIds: ["2", "4"],
  },
  {
    id: "4",
    nome: "Felipe Almeida",
    email: "felipe.almeida@example.com",
    fotoURL: "https://avatar.iran.liara.run/public",
    username: "felipe_almeida",
    seguindoIds: ["2", "3"],
    seguidoresIds: ["1", "3"],
  },
];
