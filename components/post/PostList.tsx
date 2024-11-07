import Post, { DUMMY_POSTS } from "@/models/Post";
import { FlatList, View } from "react-native";
import PostItem from "./PostItem";

export default function PostList() {
  function renderHandler(post: Post) {
    return <PostItem post={post} />;
  }

  return (
    <FlatList
      data={DUMMY_POSTS}
      renderItem={({ item }) => renderHandler(item)}
      keyExtractor={(post) => post.id}
      contentContainerStyle={{ padding: "2%" }}
    />
  );
}
