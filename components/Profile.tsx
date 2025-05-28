import { colors } from "@/constants";
import React, { ReactNode } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface ProfileProps {
  onPressIn: () => void;
  imageUri?: string;
  nickname: string;
  creatAt: string;
  option?: ReactNode;
}

function Profile({
  onPressIn,
  imageUri,
  nickname,
  creatAt,
  option,
}: ProfileProps) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.profileContainer}>
        <Image
          source={
            imageUri
              ? { uri: imageUri }
              : require("@/assets/images/default-avatar.png")
          }
          style={styles.avatar}
        />
        <View style={{ gap: 4 }}>
          <Text style={styles.nickname}>{nickname}</Text>
          <Text style={styles.creatAt}>{creatAt}</Text>
        </View>
      </Pressable>
      {option}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: { flexDirection: "row", alignItems: "center", gap: 8 },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.GRAY_300,
  },
  nickname: { fontSize: 15, fontWeight: "bold", color: colors.BLACK },
  creatAt: { fontSize: 14, color: colors.GRAY_500 },
});

export default Profile;
