import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import Colors from "@/constants/Colors";
import { Pressable, StyleSheet, View } from "react-native";
import Avatar from "./Avatar";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import StyledText from "./StyledText";

const subPaginas = [
  { key: "paraVoce", title: "Para você" },
  { key: "seguindo", title: "Seguindo" },
  { key: "descubra", title: "Descubra" },
  { key: "tendencias", title: "Tendências" },
] as const;

type Subpaginas = (typeof subPaginas)[number]["key"];

export default function Header({ route, ...props }: BottomTabHeaderProps) {
  const [selectedTab, setSelectedTab] = useState<Subpaginas>("paraVoce");

  const hideSubtabs = route.name === "notificacoes";

  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconsContainers}>
        <Avatar />
        <Link href="/" asChild>
          <FontAwesome name="align-justify" size={24} color="white" />
        </Link>
      </View>

      {!hideSubtabs && (
        <View style={styles.subtabsContainer}>
          {subPaginas.map((subpagina) => (
            <Pressable
              key={subpagina.key}
              onPress={() => setSelectedTab(subpagina.key)}
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
      )}
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
