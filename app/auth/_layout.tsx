import { colors } from "@/constants";
import Entypo from "@expo/vector-icons/Entypo";
import { Link, Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: colors.BLACK,
        contentStyle: { backgroundColor: colors.WHITE },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "로그인",
          headerShown: true,
          headerLeft: () => (
            <Link href={"/"} replace style={{ paddingRight: 20 }}>
              <Entypo name="home" size={28} color="black" />
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
