import { Feather } from "@expo/vector-icons";
import { PropsWithoutRef } from "react";
import { Image, StyleSheet, View, ViewProps } from "react-native";

type AvatarProps = {
  url?: string;
  size?: number;
} & PropsWithoutRef<ViewProps>;

export default function Avatar({
  url,
  size = 56,
  style,
  ...props
}: AvatarProps) {
  return (
    <View style={[styles.container, style]} {...props}>
      {url ? (
        <Image
          source={{ uri: url }}
          style={[styles.avatar, { minWidth: size }]}
        />
      ) : (
        <Feather name="user" size={size} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: "1%",
    borderRadius: 999,
    backgroundColor: "white",
    overflow: "hidden",
  },
  avatar: {
    aspectRatio: 1,
    borderRadius: 50,
  },
});
