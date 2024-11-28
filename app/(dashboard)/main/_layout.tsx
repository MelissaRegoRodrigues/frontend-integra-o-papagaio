import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

import Colors from "@/constants/Colors";

import Header from "@/components/Header";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: Colors.white,
        tabBarActiveTintColor: "#FFDC25",
        headerStyle: { backgroundColor: Colors.green },
        tabBarStyle: {
          backgroundColor: Colors.green,
        },
        header: (props) => <Header {...props} />,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome
              style={{ marginBottom: -3 }}
              color={color}
              size={26}
              name="home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="criarPost"
        options={{
          title: "",
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome
              style={{ marginBottom: -3 }}
              color={color}
              size={26}
              name="plus-square-o"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explorar"
        options={{
          title: "",
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome
              style={{ marginBottom: -3 }}
              color={color}
              size={26}
              name="search"
            />
          ),
        }}
      />
    </Tabs>
  );
}
