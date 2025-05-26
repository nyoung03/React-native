import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { SafeAreaView, Text } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>홈스크린</Text>
      <CustomButton label="button" onPressIn={() => router.push("/auth")} />
    </SafeAreaView>
  );
}
