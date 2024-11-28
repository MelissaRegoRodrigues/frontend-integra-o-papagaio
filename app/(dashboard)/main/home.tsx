import PostList from "@/components/post/PostList";
import usePosts from "@/hooks/usePosts";
import { getAllPosts } from "@/api/postService";
import { View } from "react-native";

export default function Home() {
  const { data: posts, error, isLoading, refresh } = usePosts(getAllPosts);

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
