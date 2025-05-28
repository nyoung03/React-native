import { colors } from "@/constants";
import { Post } from "@/types";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import FeedItem from "./FeedItem";

interface FeedListProps {
  data: Post[];
}

const dummy = [
  {
    id: 1,
    userId: 1,
    title: "더미",
    description:
      "더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용",
    createdAt: "2024-11-11",
    author: { id: 1, nickname: "nickname", imageUri: "" },
    imageUris: [],
    likes: [],
    hasVote: false,
    voteCount: 2,
    commentCount: 2,
    viewCount: 3,
  },
  {
    id: 2,
    userId: 1,
    title: "더미",
    description:
      "더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용더미 내용",
    createdAt: "",
    author: { id: 1, nickname: "nickname", imageUri: "" },
    imageUris: [],
    likes: [],
    hasVote: false,
    voteCount: 2,
    commentCount: 2,
    viewCount: 3,
  },
];

function FeedList() {
  return (
    <FlatList
      data={dummy}
      renderItem={({ item }) => <FeedItem post={item} />}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.contentContainer}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 12,
    backgroundColor: colors.GRAY_200,
    gap: 12,
  },
});

export default FeedList;
