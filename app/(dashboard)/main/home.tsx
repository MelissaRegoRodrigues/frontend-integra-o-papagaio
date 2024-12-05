import React, { useMemo } from "react";
import PostList from "@/components/post/PostList";
import usePosts from "@/hooks/usePosts";
import { getAllPosts, getMeusPosts } from "@/api/postService";
import { View } from "react-native";
import useAuth from "@/hooks/useAuth";

export default function Home() {
  const { usuario, pagina } = useAuth();
  const fetchFunction = useMemo(() => {
    switch (pagina) {
      case "praVoce":
        return getMeusPosts.bind(null, usuario!.id);
      default:
        return getAllPosts;
    }
  }, [pagina, usuario]);

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
