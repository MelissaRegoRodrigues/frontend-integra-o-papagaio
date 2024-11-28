import { getPostById } from "@/api/postService";
import { getComentariosByPostId } from "@/api/comentarioService";
import Avatar from "@/components/Avatar";
import ComentarioList from "@/components/comentario/ComentarioList";
import StyledText from "@/components/StyledText";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import { getUsuarioById } from "@/api/usuarioService";
import usePosts from "@/hooks/usePosts";
import useUsuario from "@/hooks/useUsuarios";
import { useCallback } from "react";

export default function PostScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const fetchPost = useCallback(() => getPostById(id), [id]);
  const { data: post, error, isLoading } = usePosts(fetchPost);

  const fetchUsuario = useCallback(
    () => (post?.donoId ? getUsuarioById(post.donoId) : Promise.resolve(null)),
    [post?.donoId]
  );

  const { data: usuarioData } = useUsuario(fetchUsuario);

  if (!post) return;

  const dataFormatada = new Date(post.dataPublicacao).toLocaleDateString();
  const comentarios = getComentariosByPostId(post.id);

  return (
    <View style={styles.rootContainer}>
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <Avatar url={usuarioData?.fotoURL} size={100} />
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
              </View>
            </View>
            <StyledText color="textoCinza">{dataFormatada}</StyledText>
          </View>
        </View>
        <StyledText>{post.conteudo}</StyledText>
        <ComentarioList comentarios={comentarios} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingVertical: "1%",
    paddingHorizontal: "3%",
  },
  headerContainer: {
    flexDirection: "row",
    marginVertical: "2%",
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
});
