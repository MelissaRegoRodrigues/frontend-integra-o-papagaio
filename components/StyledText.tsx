import Colors from "@/constants/Colors";
import { PropsWithoutRef } from "react";
import { StyleSheet, Text, TextProps } from "react-native";

type StyledTextProps = {
  type?: keyof typeof styles;
  color?: keyof typeof Colors.texto;
  weight?: "normal" | "bold";
} & PropsWithoutRef<TextProps>;

export default function StyledText({
  type = "paragrafo",
  color = "textoPreto",
  weight = "normal",
  style,
  ...props
}: StyledTextProps) {
  return (
    <Text
      {...props}
      style={[
        { color: Colors.texto[color] },
        styles[type],
        style,
        { fontWeight: weight },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  paragrafo: { fontSize: 14 },
});
