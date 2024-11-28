import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import StyledText from "../StyledText";
import { PropsWithoutRef, useCallback } from "react";
import Post from "@/models/Post";
import { getUsuarioById } from "@/api/usuarioService";
import Avatar from "../Avatar";
import { router } from "expo-router";
import useUsuario from "@/hooks/useUsuarios";

type PostItemProps = {
  post: Post;
} & PropsWithoutRef<PressableProps>;

export default function PostItem({ post, ...props }: PostItemProps) {
  const fetchUsuario = useCallback(
    () => getUsuarioById(post.donoId),
    [post.donoId]
  );
  const { data: usuarioData, isLoading } = useUsuario(fetchUsuario);
  const dataFormatada = new Date(post.dataPublicacao).toLocaleDateString();

  function toPostScreen() {
    const url = `/posts/${post.id}`;
    // @ts-expect-error
    router.navigate(url);
  }

  return (
    <Pressable
      style={({ pressed }) => [styles.rootContainer, pressed && styles.pressed]}
      onPress={toPostScreen}
      {...props}
    >
      <Avatar url={usuarioData?.fotoURL} />
      <View style={styles.mainContent}>
        <View style={styles.headerContent}>
          <View
            style={[
              styles.headerText,
              { flex: 1, justifyContent: "space-between" },
            ]}
          >
            <View style={styles.headerText}>
              <StyledText weight="bold">{usuarioData?.nome}</StyledText>
            </View>
            <StyledText color="textoCinza">{dataFormatada}</StyledText>
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
    borderBottomWidth: 1,
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
