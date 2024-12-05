// @ts-expect-error
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";

import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, View } from "react-native";
import StyledText from "./StyledText";
import Colors from "@/constants/Colors";
import useAuth from "@/hooks/useAuth";
import Avatar from "./Avatar";

const subPaginas = [
  { key: "descubra", title: "Descubra" },
  { key: "paraVoce", title: "Para você" },
  // { key: "seguindo", title: "Seguindo" },
  // { key: "tendencias", title: "Tendências" },
];

export type Subpaginas = (typeof subPaginas)[number]["key"];

export default function Header({ router, ...props }: BottomTabHeaderProps) {
  const { deslogar } = useAuth();
  const { setPagina } = useAuth();
  const [selectedTab, setSelectedTab] = useState<Subpaginas>("paraVoce");

  const handleTabChange = (tab: Subpaginas) => {
    setSelectedTab(tab);
    setPagina(tab);
  };
  function deslogarHandler() {
    Alert.alert(
      "Tem certeza?",
      "Uma vez deslogado você precisará logar novamente",
      [{ text: "Não" }, { text: "Sim", onPress: () => deslogar() }]
    );
  }

  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconsContainers}>
        <Avatar />
        <Pressable style={styles.logoutButton} onPress={deslogarHandler}>
          <StyledText color="textoBranco" weight="bold">
            Deslogar
          </StyledText>
        </Pressable>
      </View>

      <View style={styles.subtabsContainer}>
        {subPaginas.map((subpagina) => (
          <Pressable
            key={subpagina.key}
            onPress={() => handleTabChange(subpagina.key)}
            style={[selectedTab === subpagina.key && styles.selectedSubtab]}
          >
            <StyledText
              color="textoBranco"
              type="header"
              weight={selectedTab === subpagina.key ? "bold" : "normal"}
            >
              {subpagina.title}
            </StyledText>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.green,
    paddingHorizontal: "4%",
    paddingBottom: "2%",
    paddingTop: "10%",
  },
  iconsContainers: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoutButton: {
    backgroundColor: "red",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  subtabsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "4%",
    gap: 6,
  },
  selectedSubtab: {
    borderBottomWidth: 1,
    borderBlockColor: Colors.yellow,
  },
});
