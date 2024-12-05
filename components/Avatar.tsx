import React from "react";
import { Feather } from "@expo/vector-icons";
import { PropsWithoutRef } from "react";
import { Image, StyleSheet, View, ViewProps, Text } from "react-native";

type AvatarProps = {
  url?: string;
  size?: number;
  name?: string;
} & PropsWithoutRef<ViewProps>;

export default function Avatar({
  url,
  size = 56,
  style,
  name,
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
      <Text></Text>
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
