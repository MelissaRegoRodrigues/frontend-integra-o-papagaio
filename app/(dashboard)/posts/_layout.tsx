import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";
import "react-native-reanimated";

export default function PostLayout() {
  return (
    <>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />

      <Stack>
        <Stack.Screen
          name="[id]"
          options={{
            title: "Detalhes Post",
            headerStyle: { backgroundColor: Colors.green },
            headerTintColor: Colors.white,
          }}
        />
      </Stack>
    </>
  );
}
