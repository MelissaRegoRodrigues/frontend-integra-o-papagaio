import { AuthContextProvider } from "@/store/AuthContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Platform } from "react-native";
import "react-native-reanimated";
import useAuth from "@/hooks/useAuth";

export default function RootLayout() {
  const { usuario, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  return (
    <AuthContextProvider>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <Stack screenOptions={{ headerShown: false }}>
        {usuario ? (
          <Stack.Screen name="tabLayout" options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="index" options={{ headerShown: false }} />
        )}
      </Stack>
    </AuthContextProvider>
  );
}
