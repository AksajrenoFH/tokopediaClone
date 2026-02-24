import { Image } from "expo-image";
import { router } from "expo-router";
import {
  Bell,
  ChevronRight,
  ClipboardList,
  Heart,
  HelpCircle,
  MessageSquare,
  QrCode,
  Settings,
  Star,
  Store,
  Users,
} from "lucide-react-native";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  // Helper Komponen biar gak nulis berulang (Sudah fix pake View, bukan div)
  const MenuItem = ({
    icon: Icon,
    title,
    onPress,
  }: {
    icon: any;
    title: string;
    onPress?: () => void;
  }) => (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 14,
        paddingHorizontal: 16,
        backgroundColor: pressed ? "#f9f9f9" : "#fff",
      })}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <Icon size={20} color="#666" />
        <Text style={{ fontSize: 14, color: "#333" }}>{title}</Text>
      </View>
      <ChevronRight size={18} color="#ccc" />
    </Pressable>
  );

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      {/* Header Statis */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Akun</Text>
        <Settings size={24} color="#000" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Info User */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 15,
            gap: 12,
          }}
        >
          <Image
            source={{
              uri: "https://images.tokopedia.net/img/cache/300/tPxBYm/2023/1/20/198655c8-1736-4533-83c4-b1a1c273a3ed.jpg.webp?ect=4g",
            }}
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              backgroundColor: "#f0f0f0",
            }}
          />
          <View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Aksa</Text>
            <Text style={{ fontSize: 12, color: "#888" }}>Member Silver</Text>
          </View>
        </View>

        {/* Tombol Buka Toko & Affiliate */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 16,
            paddingBottom: 16,
            gap: 12,
          }}
        >
          <Pressable
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 10,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#e5e7e9",
              gap: 6,
            }}
          >
            <Store size={16} color="#00aa5b" />
            <Text style={{ fontWeight: "bold", fontSize: 13 }}>Buka Toko</Text>
            <ChevronRight size={12} color="#ccc" />
          </Pressable>

          <Pressable
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 10,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#e5e7e9",
              gap: 6,
            }}
          >
            <Users size={16} color="#00aa5b" />
            <Text style={{ fontWeight: "bold", fontSize: 13 }}>
              Daftar Affiliate
            </Text>
            <ChevronRight size={12} color="#ccc" />
          </Pressable>
        </View>

        {/* Separator */}
        <View style={{ height: 8, backgroundColor: "#f0f2f5" }} />

        {/* Menu Grup 1 */}
        <View style={{ paddingVertical: 4 }}>
          <MenuItem
            icon={ClipboardList}
            title="Daftar Transaksi"
            onPress={() => router.push("/receipt")}
          />
          <MenuItem icon={Star} title="Ulasan" />
          <MenuItem icon={Bell} title="Beli Lagi" />
          <MenuItem icon={Heart} title="Wishlist" />
          <MenuItem icon={Store} title="Toko yang di-follow" />
        </View>

        {/* Separator */}
        <View style={{ height: 8, backgroundColor: "#f0f2f5" }} />

        {/* Menu Grup 2 */}
        <View style={{ paddingVertical: 4 }}>
          <MenuItem icon={MessageSquare} title="Pesanan Dikomplain" />
          <MenuItem icon={HelpCircle} title="Bantuan Tokopedia Care" />
          <MenuItem icon={QrCode} title="Scan Kode QR" />
        </View>

        {/* Padding bawah biar gak kepotong tab bar */}
        <View style={{ height: 50 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
