import {
  Pressable,
  Image,
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
// @ts-expect-error
import logo from "../assets/images/logoLogin.png";
import { useState } from "react";
import Botao from "@/components/Botao";
import { router } from "expo-router";
import Colors from "@/constants/Colors";
import React from "react";
import useAuth from "@/hooks/useAuth";

export default function RegisterScreen() {
  const { registrar } = useAuth();
  const [nome, setnome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [senhaConfirma, setSenhaConfirma] = useState<string>("");

  const handleRegister = async () => {
    console.log(senha, email, nome);

    if (!senha || !email || !nome) return;
    registrar({ nome, email, password: senha, username: nome });
    resetInputs();
    Alert.alert("Usuário registrado com sucesso");
    router.back();
  };

  function resetInputs() {
    setnome("");
    setEmail("");
    setSenha("");
    setSenhaConfirma("");
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />

      <Text style={styles.text}>Nome de Usuário</Text>
      <TextInput
        placeholder="Nome de usuário"
        value={nome}
        onChangeText={setnome}
        autoCapitalize="none"
        style={styles.input}
      />

      <Text style={styles.text}>Email</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />

      <Text style={styles.text}>Senha</Text>
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
        style={styles.input}
        autoCapitalize="none"
      />

      <Text style={styles.text}>Confirme a senha</Text>
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        value={senhaConfirma}
        onChangeText={setSenhaConfirma}
        style={styles.input}
        autoCapitalize="none"
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
    backgroundColor: "#a7a189",
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
});
