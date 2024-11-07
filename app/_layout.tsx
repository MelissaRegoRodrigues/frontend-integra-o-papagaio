import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
