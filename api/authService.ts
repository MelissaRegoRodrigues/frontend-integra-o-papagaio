import { Credenciais } from "@/store/AuthContext";
import Usuario, { UsuarioCreation } from "@/models/Usuario";

const AUTH_URL = "https://930c-200-133-1-75.ngrok-free.app/api/auth";

async function logar(usuario: Credenciais): Promise<Usuario | null> {
  const response = await fetch(AUTH_URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });

  if (!response.ok) {
    throw new Error("Erro ao fazer login");
  }

  const data = await response.json();
  console.log(data);

  return data as Usuario;
}

async function register(usuario: UsuarioCreation): Promise<Usuario> {
  const response = await fetch(AUTH_URL + "/register", {
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

export const authService = {
  logar,
  register,
};
