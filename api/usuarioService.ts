import Usuario from "@/models/Usuario";

const USUARIOS_URL = "https://930c-200-133-1-75.ngrok-free.app/api/usuarios";

async function follow(seguidorId: string, alvoId: string) {
  const response = await fetch(
    USUARIOS_URL + `/follow/${seguidorId}/${alvoId}`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao seguir usuário");
  }

  const data = await response.json();
  console.log(data);

  return data as Usuario;
}

async function unfollow(seguidorId: string, seguidoId: string) {
  const response = await fetch(
    USUARIOS_URL + `/unfollow/${seguidorId}/${seguidoId}`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao deixar de seguir usuário");
  }

  const data = await response.json();
  return data as Usuario;
}

async function getFollowers(usuarioId: string): Promise<Usuario[]> {
  const response = await fetch(USUARIOS_URL + `/followers/${usuarioId}`);

  if (!response.ok) {
    throw new Error("Erro ao obter seguidores");
  }

  const data = await response.json();
  return data as Usuario[];
}

async function getFollowing(usuarioId: string): Promise<Usuario[]> {
  const response = await fetch(USUARIOS_URL + `/following/${usuarioId}`);

  if (!response.ok) {
    throw new Error("Erro ao obter seguidos");
  }

  const data = await response.json();
  return data as Usuario[];
}

async function getAllUsuarios(): Promise<Usuario[]> {
  const response = await fetch(USUARIOS_URL);

  if (!response.ok) {
    throw new Error("Erro ao obter usuários");
  }

  const data = await response.json();
  return data as Usuario[];
}

async function getUsuarioById(usuarioId: string): Promise<Usuario> {
  const response = await fetch(USUARIOS_URL + `/${usuarioId}`);

  if (!response.ok) {
    throw new Error("Erro ao obter usuário por ID");
  }

  const data = await response.json();
  return data as Usuario;
}

export const usuarioService = {
  follow,
  unfollow,
  getFollowers,
  getFollowing,
  getAllUsuarios,
  getUsuarioById,
};
