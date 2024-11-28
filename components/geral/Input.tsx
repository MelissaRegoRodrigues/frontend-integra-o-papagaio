import { PropsWithoutRef } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type InputProps = {
  onChangeText: (text: string) => void;
  value: string;
} & PropsWithoutRef<TextInputProps>;

export default function Input({
  onChangeText,
  value,
  style,
  placeholder,
  ...props
}: InputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.input, style]}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
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
