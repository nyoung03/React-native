import { colors } from "@/constants";
import { Post } from "@/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Profile from "./Profile";

interface FeedItemProps {
  post: Post;
}

function FeedItem({ post }: FeedItemProps) {
  const isLiked = false;

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Profile
          imageUri={post.author.imageUri}
          nickname={post.author.nickname}
          creatAt={post.createdAt}
          onPressIn={() => {}}
        />
        <Text style={styles.title}>{post.title}</Text>
        <Text numberOfLines={3} style={styles.description}>
          {post.description}
        </Text>
      </View>
      <View style={styles.menuContainer}>
        <Pressable style={styles.menu}>
          <Entypo
            name={isLiked ? "heart" : "heart-outlined"}
            size={16}
            color={isLiked ? colors.ORANGE_600 : colors.BLACK}
          />
          <Text style={isLiked ? styles.activeMenuText : styles.menuText}>
            1
          </Text>
        </Pressable>
        <Pressable style={styles.menu}>
          <FontAwesome name="commenting-o" size={16} color={colors.BLACK} />
          <Text>1</Text>
        </Pressable>
        <Pressable style={styles.menu}>
          <AntDesign name="eyeo" size={16} color={colors.BLACK} />
          <Text>1</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
  },
  contentContainer: { padding: 16 },
  title: {
    fontSize: 18,
    color: colors.BLACK,
    fontWeight: "600",
    marginVertical: 8,
  },
  description: { fontSize: 16, color: colors.BLACK, marginBottom: 14 },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopColor: colors.GRAY_300,
    borderTopWidth: StyleSheet.hairlineWidth,
  },

  menu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    width: "33%",
    gap: 4,
  },
  menuText: {
    fontSize: 14,
    color: colors.GRAY_700,
  },
  activeMenuText: {
    fontWeight: "500",
    color: colors.ORANGE_600,
  },
});

export default FeedItem;
