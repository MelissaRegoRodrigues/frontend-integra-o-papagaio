import Usuario from "@/models/Usuario";

const URL = "https://dcf6-200-133-1-75.ngrok-free.app/api/usuarios";

export async function register(usuario: Usuario) {
  const response = await fetch(URL + "/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });

  if (!response.ok) {
    throw new Error("Erro ao registrar usuário");
  }

  const data = await response.json();
  return data as Usuario;
}

export async function follow(
  seguidorId: string,
  seguidoId: string
): Promise<string> {
  const response = await fetch(URL + `/follow/${seguidorId}/${seguidoId}`, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Erro ao seguir usuário");
  }

  const data = await response.text();
  return data;
}

export async function unfollow(
  seguidorId: string,
  seguidoId: string
): Promise<string> {
  const response = await fetch(URL + `/unfollow/${seguidorId}/${seguidoId}`, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Erro ao deixar de seguir usuário");
  }

  const data = await response.text();
  return data;
}

export async function getFollowers(usuarioId: string): Promise<Usuario[]> {
  const response = await fetch(URL + `/followers/${usuarioId}`);

  if (!response.ok) {
    throw new Error("Erro ao obter seguidores");
  }

  const data = await response.json();
  return data as Usuario[];
}

export async function getFollowing(usuarioId: string): Promise<Usuario[]> {
  const response = await fetch(URL + `/following/${usuarioId}`);

  if (!response.ok) {
    throw new Error("Erro ao obter seguidos");
  }

  const data = await response.json();
  return data as Usuario[];
}

export async function getAllUsuarios(): Promise<Usuario[]> {
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error("Erro ao obter usuários");
  }

  const data = await response.json();
  return data as Usuario[];
}

export async function getUsuarioById(usuarioId: string) {
  const response = await fetch(URL + `/${usuarioId}`);

  if (!response.ok)
    throw new Error("Algo deu errado " + { cause: response.text });

  const data = await response.json();
  return data as Usuario;
}
