import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import Colors from "@/constants/Colors";
import Avatar from "@/components/Avatar";
import Header from "@/components/Header";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: Colors.tabIconDefault,
        tabBarActiveTintColor: "#FFDC25",
        headerStyle: { backgroundColor: Colors.navigationBgColor },
        tabBarStyle: { backgroundColor: Colors.navigationBgColor },
        header: (props) => <Header {...props} />,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerLeftContainerStyle: { paddingHorizontal: "4%" },
          headerRightContainerStyle: { paddingHorizontal: "4%" },
        }}
      />
      <Tabs.Screen
        name="explorar"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
    </Tabs>
  );
}
