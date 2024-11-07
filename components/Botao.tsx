import { Pressable, StyleSheet, Text } from "react-native";

type BotaoProps = {
  texto: string
  clicar: () => void
}

export default function Botao({texto, clicar}: BotaoProps) {
    return <Pressable style={styles.button} onPress={clicar}>
    <Text style={{color: "black"}}>{texto}</Text>
</Pressable>
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 4,
    borderRadius: 200,
    alignItems: "center",
    padding: "4%"
  }
})