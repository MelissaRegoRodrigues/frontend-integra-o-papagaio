import {
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
  const [senha, setSenha] = useState("");
  const [senhaConfirma, setSenhaConfirma] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  const checkPasswordsMatch = (senha: string, senhaConfirma: string) => {
    setPasswordsMatch(senha === senhaConfirma);
  };

  function emailHandler(novoEmail: string) {
    setEmail(novoEmail);
  }

  function nomeHandler(novoNome: string) {
    setNomeUsuario(novoNome);
  }

  function senhaHandler(novaSenha: string) {
    setSenha(novaSenha);
  }

  function senhaConfirmaHandler(novaSenhaConfirma: string) {
    setSenhaConfirma(novaSenhaConfirma);
  }

  function registerHandle() {
    checkPasswordsMatch(senha, senhaConfirma);
    router.push("/");
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />

      <Text style={styles.text}>Nome de Usuário</Text>
      <TextInput
        placeholder="Nome de usuário"
        style={styles.input}
        value={nomeUsuario}
        onChangeText={nomeHandler}
      />

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

      <Text style={styles.text}>Confirme a senha</Text>
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry={true}
        onChangeText={senhaConfirmaHandler}
      />

      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Text
            style={{
              color: Colors.green,
              marginLeft: "16%",
              marginRight: "12%",
            }}
          >
            Voltar
          </Text>
        </TouchableOpacity>

        <Botao
          color={Colors.green}
          width={140}
          texto="Registre-se"
          clicar={registerHandle}
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
