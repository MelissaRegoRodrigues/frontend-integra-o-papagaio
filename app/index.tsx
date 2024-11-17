import {
  Pressable,
  Image,
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import logo from "../assets/images/logoLogin.png";
import { useState } from "react";
import Botao from "@/components/Botao";
import { router } from "expo-router";
import Colors from "@/constants/Colors";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, SetSenha] = useState("");

  function emailHandler(novoEmail: string) {
    setEmail(novoEmail);
  }

  function senhaHandler(novaSenha: string) {
    SetSenha(novaSenha);
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.text}>Email</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={emailHandler}
      />

      <Text style={styles.text}>Senha</Text>
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry={true}
        onChangeText={senhaHandler}
      />
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text style={{ color: Colors.green, marginLeft: "16%" }}>
            Registre-se
          </Text>
        </TouchableOpacity>

        <Botao
          color={Colors.green}
          width={140}
          texto="Login"
          clicar={() => router.push("/(dashboard)/home")}
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
  button: {
    borderWidth: 4,
    borderRadius: 200,
    alignItems: "center",
    padding: "4%",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
});
