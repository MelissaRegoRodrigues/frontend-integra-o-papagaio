import { Pressable, StyleSheet, Text } from "react-native";

type BotaoProps = {
  texto: string;
  clicar: () => void;
  width: number;
  color: string;
};

export default function Botao({ texto, clicar, width, color, ...props }: BotaoProps) {
  return (
    <Pressable
      style={[styles.button, { backgroundColor: color, width: width }]}
      onPress={clicar}
      {...props}
    >
      <Text style={styles.text}>{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 200,
    alignItems: "center",
    padding: "4%",
    margin: "4%",
    marginLeft: "8%",
    alignSelf: 'flex-end',
  },
  text: {
    color: "white",
    fontSize: 16, 
    fontWeight: "bold", 
  },
});
