import React, { useMemo } from "react";
import PostList from "@/components/post/PostList";
import usePosts from "@/hooks/usePosts";
import { getAllPosts, getMeusPosts } from "@/api/postService";
import { View } from "react-native";
import useAuth from "@/hooks/useAuth";

function getFetchFunction(pagina: string, usuarioId?: string) {
  switch (pagina) {
    case "paraVoce":
      return getMeusPosts.bind(null, usuarioId!);
    default:
      return getAllPosts;
  }
}

export default function Home() {
  const { usuario, pagina } = useAuth();

  const fetchFunction = useMemo(
    () => getFetchFunction(pagina, usuario?.id),
    [pagina, usuario?.id]
  );

  const { data: posts, error, isLoading, refresh } = usePosts(fetchFunction);

  return (
    <View>
      <PostList
        posts={posts || []}
        onRefresh={refresh}
        isRefreshing={isLoading}
      />
    </View>
  );
}
