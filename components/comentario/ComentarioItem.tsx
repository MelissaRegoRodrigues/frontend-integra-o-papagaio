import { Pressable, StyleSheet, View } from "react-native";
import StyledText from "../StyledText";
import { Feather } from "@expo/vector-icons";
import Comentario from "@/models/Comentario";
import { getUsuarioById } from "@/api/usuarioService";

import Avatar from "../Avatar";

type ComentarioItemProps = {
  comentario: Comentario;
};

export default function ComentarioItem({ comentario }: ComentarioItemProps) {
  const usuarioData = getUsuarioById(comentario.donoId);

  return (
    <View style={styles.rootContainer}>
      <Avatar url={usuarioData?.fotoURL} />
      <View style={styles.mainContent}>
        <View style={styles.headerContent}>
          <View style={styles.headerText}>
            <StyledText weight="bold">{usuarioData?.nome}</StyledText>
            <StyledText color="textoCinza">@{usuarioData?.username}</StyledText>
            <StyledText color="textoCinza">
              • {new Date().toLocaleDateString()}
            </StyledText>
          </View>
        </View>
        <StyledText>{comentario.conteudo}</StyledText>
        <View style={styles.footerContent}>
          <Pressable style={styles.likeButton}>
            <Feather name="thumbs-up" size={16} color="#838383" />
            <StyledText style={styles.likeCount}>
              {comentario.curtida}
            </StyledText>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    padding: "1%",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  mainContent: {
    flex: 1,
    marginLeft: "1%",
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  footerContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "1%",
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: "4%",
  },
  likeCount: {
    marginLeft: "2%",
    color: "#838383",
  },
});
