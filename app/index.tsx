import {
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
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

const API_URL = " https://394e-200-133-1-75.ngrok-free.app/api/auth"; // Altere para o endereço do seu backend Spring Boot
const LOGIN_ENDPOINT = "/login";

interface LoginRequest {
  email: string; // Corrigido para "email" ao invés de "username"
  password: string;
}

export default function LoginScreen() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleLogin = async () => {
    try {
      const credentials: LoginRequest = { email: email, password: senha };

      console.log("Enviando requisição de login:", credentials);

      const response = await axios.post(
        `${API_URL}${LOGIN_ENDPOINT}`,
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.tokenDTO.token) {
        await AsyncStorage.setItem("authToken", response.data.tokenDTO.token);
        setMessage("Login bem-sucedido!");
        router.push("/(dashboard)/main/home");
      } else {
        setMessage("Erro ao receber o token.");
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
      <Text style={styles.text}>Email</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.text}>Senha</Text>
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text style={{ color: Colors.green, marginLeft: "16%" }}>
            Registre-se
          </Text>
        </TouchableOpacity>

        <Botao
          color="green"
          width={140}
          texto="Login"
          clicar={() => router.push("/(dashboard)/main/home")}
        />
      </View>

      {/* Mostra mensagem de erro ou sucesso */}
      {message ? <Text style={styles.message}>{message}</Text> : null}
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
  input: {
    borderWidth: 1,
    padding: "2%",
    margin: "4%",
    height: 50,
    borderRadius: 15,
    borderColor: "transparent",
    backgroundColor: "white",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 6,
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
  message: {
    marginTop: 15,
    textAlign: "center",
    color: "red",
    fontSize: 16,
  },
});
