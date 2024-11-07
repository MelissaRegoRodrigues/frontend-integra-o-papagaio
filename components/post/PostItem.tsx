import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import StyledText from "../StyledText";
import { Feather } from "@expo/vector-icons";
import { PropsWithoutRef } from "react";
import Post from "@/models/Post";
import { getUsuarioById } from "@/api/usuarioService";
import Avatar from "../Avatar";

type PostItemProps = {
  post: Post;
} & PropsWithoutRef<PressableProps>;

export default function PostItem({ post, ...props }: PostItemProps) {
  const usuarioData = getUsuarioById(post.donoId);

  return (
    <Pressable
      style={({ pressed }) => [styles.rootContainer, pressed && styles.pressed]}
      {...props}
    >
      <Avatar url={usuarioData?.fotoURL} />
      <View style={styles.mainContent}>
        <View style={styles.headerContent}>
          <View style={styles.headerText}>
            <StyledText weight="bold">{usuarioData?.nome}</StyledText>
            <StyledText color="textoCinza">@{usuarioData?.username}</StyledText>
            <StyledText color="textoCinza">
              - dia {post.dataPublicacao.getDay()}
            </StyledText>
          </View>
        </View>
        <StyledText>{post.conteudo}</StyledText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    padding: "1%",
    marginVertical: "2%",
    borderWidth: 1,
    alignItems: "center",
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    flexDirection: "row",
    gap: 12,
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.85,
  },
});
