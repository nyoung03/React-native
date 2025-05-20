import { router } from "expo-router";
import { Pressable, SafeAreaView, Text } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Pressable onPress={() => router.push("/explore")}>
        <Text>홈스크린</Text>
      </Pressable>
    </SafeAreaView>
  );
}
