import React, { useState } from "react";
import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import StyledText from "../StyledText";
import { PropsWithoutRef, useCallback } from "react";
import Post from "@/models/Post";

import Avatar from "../Avatar";
import { router } from "expo-router";
import useUsuario from "@/hooks/useUsuarios";
import { usuarioService } from "@/api/usuarioService";
import useAuth from "@/hooks/useAuth";

type PostItemProps = {
  post: Post;
} & PropsWithoutRef<PressableProps>;

export default function PostItem({ post, ...props }: PostItemProps) {
  const { usuario, refresh } = useAuth();
  const fetchUsuario = useCallback(
    () => usuarioService.getUsuarioById(post.donoId),
    [post.donoId]
  );

  const { data: usuarioData } = useUsuario(fetchUsuario);
  const dataFormatada = new Date(post.dataPublicacao).toLocaleDateString();
  const [isSeguindo, setIsSeguindo] = useState<boolean>(
    !!usuarioData?.seguidores?.find((user) => user.id === usuario?.id) || false
  );
  function toPostScreen() {
    const url = `/posts/${post.id}`;
    // @ts-expect-error
    router.navigate(url);
  }

  console.log(usuarioData);

  async function seguirHandler() {
    if (!usuario) return;
    const usuarioAtualizado = await usuarioService.follow(
      usuario!.id,
      usuarioData!.id
    );
    setIsSeguindo(true);

    refresh(usuarioAtualizado);
  }

  async function pararSeguirHandler() {
    if (!usuario) return;

    const usuarioAtualizado = await usuarioService.unfollow(
      usuario!.id,
      usuarioData!.id
    );
    setIsSeguindo(false);
    refresh(usuarioAtualizado);
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
            <View style={{ flexDirection: "row", gap: 16 }}>
              <StyledText color="textoCinza">{dataFormatada}</StyledText>
              {isSeguindo ? (
                <Pressable
                  style={{ borderWidth: 1, padding: "2%", borderRadius: 8 }}
                  onPress={pararSeguirHandler}
                >
                  <StyledText>Parar de Seguir</StyledText>
                </Pressable>
              ) : (
                <Pressable
                  style={{ borderWidth: 1, padding: "2%", borderRadius: 8 }}
                  onPress={seguirHandler}
                >
                  <StyledText>Seguir</StyledText>
                </Pressable>
              )}
            </View>
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
