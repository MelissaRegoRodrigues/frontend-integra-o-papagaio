import React from "react";
import { createContext, ReactNode, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Usuario, { UsuarioCreation } from "@/models/Usuario";
import { authService } from "@/api/authService";
import { Subpaginas } from "@/components/Header";

export type Credenciais = {
  email: string;
  password: string;
};

type AuthContextProps = {
  usuario: Usuario | null;
  logar: (credenciais: Credenciais) => Promise<void>;
  registrar: (novoUsuario: UsuarioCreation) => Promise<void>;
  deslogar: () => Promise<void>;
  isLoading: boolean;
  refresh: (usuario: Usuario) => Promise<void>;
  pagina: Subpaginas;
  setPagina: (pagina: string) => void;
};

export const AuthContext = createContext<AuthContextProps>({
  usuario: null,
  logar: async () => {},
  deslogar: async () => {},
  registrar: async () => {},
  isLoading: false,
  refresh: async () => {},
  pagina: "paraVoce",
  setPagina: () => {},
});

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [pagina, setPagina] = useState<Subpaginas>("paraVoce");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const carregarUsuario = async () => {
      setIsLoading(true);
      try {
        const usuarioLocal = await AsyncStorage.getItem("usuario");

        if (usuarioLocal) {
          setUsuario(JSON.parse(usuarioLocal));
        }
      } catch (error) {
        console.error("Erro ao carregar usuário do AsyncStorage:", error);
        setUsuario(null);
      } finally {
        setIsLoading(false);
      }
    };

    carregarUsuario();
  }, []);
  async function logar(credenciais: Credenciais) {
    setIsLoading(true);
    try {
      const usuarioLogado = await authService.logar(credenciais);

      if (usuarioLogado) {
        await AsyncStorage.setItem("usuario", JSON.stringify(usuarioLogado));
        setUsuario(usuarioLogado);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function deslogar() {
    try {
      await AsyncStorage.removeItem("usuario");
      setUsuario(null);
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    }
  }

  async function registrar(usuario: UsuarioCreation) {
    try {
      await authService.register(usuario);
    } catch (error) {
      console.error("Erro ao registrar:", error);
    }
  }

  async function refresh(usuario: Usuario) {
    setUsuario(usuario);
  }

  const value: AuthContextProps = {
    usuario,
    logar,
    deslogar,
    isLoading,
    registrar,
    refresh,
    pagina,
    setPagina,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
