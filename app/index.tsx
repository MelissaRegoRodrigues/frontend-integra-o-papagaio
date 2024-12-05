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
import { useEffect, useState } from "react";
import Botao from "@/components/Botao";
import { router } from "expo-router";
import Colors from "@/constants/Colors";
import React from "react";
import { Credenciais } from "@/store/AuthContext";
import useAuth from "@/hooks/useAuth";

export default function LoginScreen() {
  const { logar, usuario } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (usuario) {
      router.push("/(dashboard)/main/home");
    }
  }, [usuario]);

  const handleLogin = async () => {
    if (!email || !senha) return;

    const credentials: Credenciais = { email, password: senha };

    console.log("Enviando requisição de login:", credentials);

    logar({ email, password: senha });
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
        autoCapitalize="none"
      />

      <Text style={styles.text}>Senha</Text>
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
        autoCapitalize="none"
      />

      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text style={{ color: Colors.green, marginLeft: "16%" }}>
            Registre-se
          </Text>
        </TouchableOpacity>

        <Botao color="green" width={140} texto="Login" clicar={handleLogin} />
      </View>

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
