import { HapticTab } from "@/components/haptic-tab";
import { Tabs } from "expo-router";
import { BadgePercent, Home, Receipt, Tv, User } from "lucide-react-native";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarActiveTintColor: "#00aa5b",
        tabBarInactiveTintColor: "#888",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Home
              size={28}
              // Saat aktif: stroke putih, fill hijau. Saat mati: stroke abu, fill putih.
              color={focused ? "#fff" : color}
              fill={focused ? color : "#fff"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          tabBarIcon: ({ color, focused }) => (
            <Tv
              size={28}
              color={focused ? "#fff" : color}
              fill={focused ? color : "#fff"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="promo"
        options={{
          title: "Promo",
          tabBarIcon: ({ focused, color }) => {
            const promoColor = "#ff0000";
            return (
              <BadgePercent
                size={28}
                // Jika aktif pakai putih di atas merah, jika tidak pakai warna default
                color={focused ? "#fff" : color}
                fill={focused ? promoColor : "#fff"}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="receipt"
        options={{
          title: "Transaksi",
          tabBarIcon: ({ color, focused }) => (
            <Receipt
              size={28}
              color={focused ? "#fff" : color}
              fill={focused ? color : "#fff"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ color, focused }) => (
            <User
              size={focused ? 28 : 26}
              color={focused ? "#fff" : color}
              fill={focused ? color : "#fff"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
