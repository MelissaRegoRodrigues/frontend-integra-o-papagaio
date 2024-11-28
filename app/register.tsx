import {
  Pressable,
  Image,
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
// @ts-expect-error
import logo from "../assets/images/logoLogin.png";
import { useState } from "react";
import Botao from "@/components/Botao";
import { router } from "expo-router";
import Colors from "@/constants/Colors";
import Input from "@/components/geral/Input";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

const API_URL = " https://394e-200-133-1-75.ngrok-free.app/api/auth";
const REGISTER_ENDPOINT = "/register";

interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export default function RegisterScreen() {
  const [nomeUsuario, setNomeUsuario] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [senhaConfirma, setSenhaConfirma] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

  // Função para verificar se as senhas coincidem
  const checkPasswordsMatch = () => {
    setPasswordsMatch(senha === senhaConfirma);
  };

  // Função de registro
  const handleRegister = async () => {
    if (!passwordsMatch) {
      alert("As senhas não coincidem!");
      return;
    }

    if (!nomeUsuario || !email || !senha || !senhaConfirma) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const newUser: RegisterRequest = {
        username: nomeUsuario,
        email,
        password: senha,
      };
      const response = await axios.post(
        `${API_URL}${REGISTER_ENDPOINT}`,
        newUser,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Verifique o que está sendo retornado
      console.log("Resposta da API:", response.data);

      // Verifique se 'accessToken' existe e está sendo retornado corretamente
      if (response.data.accessToken) {
        await AsyncStorage.setItem("authToken", response.data.accessToken);
        setMessage("Registro bem-sucedido!");
        router.push("/"); // Redireciona para a tela inicial (ou login)
      } else {
        setMessage("Erro ao registrar usuário.");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // Verificando se é um erro do tipo AxiosError
        console.error("Erro de resposta do servidor:", error.response);
        console.error("Erro de requisição:", error.request);
        setMessage("Credenciais inválidas ou erro na requisição.");
      } else {
        // Caso o erro não seja do tipo AxiosError
        console.error("Erro desconhecido:", error);
        setMessage("Erro desconhecido.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />

      <Text style={styles.text}>Nome de Usuário</Text>
      <TextInput
        placeholder="Nome de usuário"
        value={nomeUsuario}
        onChangeText={setNomeUsuario}
      />

      <Text style={styles.text}>Email</Text>
      <Input placeholder="Email" value={email} onChangeText={emailHandler} />

      <Text style={styles.text}>Senha</Text>
      <Input
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={senhaHandler}
      />

      <Text style={styles.text}>Confirme a senha</Text>
      <Input
        placeholder="Senha"
        secureTextEntry={true}
        value={senhaConfirma}
        onChangeText={senhaConfirmaHandler}
      />

      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Text style={{ color: Colors.green }}>Já tem uma conta? Login</Text>
        </TouchableOpacity>

        <Botao
          color="green"
          width={140}
          texto="Registre-se"
          clicar={handleRegister} // Chama a função de registro
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFEFA",
    padding: "10%",
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    height: "20%",
    alignSelf: "center",
  },
  text: {
    color: "black",
    marginLeft: "5%",
    marginTop: "4%",
    fontWeight: "bold",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
});
