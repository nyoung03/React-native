import { colors } from "@/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  const iconSize = 25;
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.ORANGE_600,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={`home-${focused ? "sharp" : "outline"}`}
              size={iconSize}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="my"
        options={{
          title: "My profile",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={`person-circle${focused ? "" : "-outline"}`}
              size={iconSize}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={`settings${focused ? "" : "-outline"}`}
              size={iconSize}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
