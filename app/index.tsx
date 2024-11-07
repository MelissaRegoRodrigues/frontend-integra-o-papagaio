import { StyleSheet, TextInput, View } from "react-native";

import { useState } from "react";
import Botao from "@/components/Botao";
import { router } from "expo-router";

export default function TabOneScreen() {
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
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={emailHandler}
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry={true}
        onChangeText={senhaHandler}
      />
      <Botao
        texto="Ir para Home"
        clicar={() => router.push("/(dashboard)/home")}
      />

      <Botao
        texto="Ir para Explorar"
        clicar={() => router.push("/(dashboard)/explorar")}
      />
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
  input: {
    borderWidth: 1,
    padding: "2%",
    margin: "4%",
  },
  button: {
    borderWidth: 4,
    borderRadius: 200,
    alignItems: "center",
    padding: "4%",
  },
});
