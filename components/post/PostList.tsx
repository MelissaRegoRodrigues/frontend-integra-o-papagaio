import React, { memo } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import Post from "@/models/Post";
import PostItem from "./PostItem";
import StyledText from "../StyledText";

type PostListProps = {
  posts: Post[];
  onRefresh: () => void;
  isRefreshing: boolean;
};

const PostList = memo(({ posts, onRefresh, isRefreshing }: PostListProps) => {
  function renderHandler(post: Post) {
    return <PostItem post={post} />;
  }

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => renderHandler(item)}
      keyExtractor={(post) => post.id}
      contentContainerStyle={{ padding: "2%" }}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
      ListEmptyComponent={
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledText>
            Nenhum Post encontrado, seja o primeiro a postar algo!
          </StyledText>
        </View>
      }
    />
  );
});

export default PostList;
