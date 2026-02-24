import { Image } from "expo-image";
import {
  MessageCircleMore,
  MoreVertical,
  Search,
  ShoppingCart,
} from "lucide-react-native";
import React from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

// Data dummy untuk simulasi daftar transaksi
const TRANSACTION_DATA = [
  {
    id: "1",
    date: "26 Agu 2025",
    status: "Selesai",
    title: "Knowledge Zenith KZ EDX Dynamic Driver - ...",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", // Contoh image
    totalPrice: 149900,
    itemCount: 1,
  },
];

export default function ReceiptScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header Search Section */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 10,
          gap: 12,
          borderBottomWidth: 1,
          borderBottomColor: "#f0f0f0",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#fff",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#e5e7e9",
            alignItems: "center",
            paddingHorizontal: 10,
            height: 36,
          }}
        >
          <Search size={16} color="#888" />
          <TextInput
            placeholder="Cari transaksi"
            style={{ flex: 1, marginLeft: 8, fontSize: 13 }}
          />
        </View>
        <View>
          <MessageCircleMore color="#000" size={24} />
          <View
            style={{
              position: "absolute",
              right: -4,
              top: -4,
              backgroundColor: "#ff0000",
              borderRadius: 10,
              paddingHorizontal: 4,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 10, fontWeight: "bold" }}>
              1
            </Text>
          </View>
        </View>
        <ShoppingCart color="#000" size={24} />
      </View>

      {/* Filter Tabs (Horizontal) */}
      <View style={{ paddingVertical: 10 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
        >
          {["Semua Status", "Semua Produk", "Semua Tanggal"].map(
            (filter, index) => (
              <Pressable
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: "#e5e7e9",
                }}
              >
                <Text style={{ fontSize: 12, color: "#666" }}>{filter}</Text>
              </Pressable>
            ),
          )}
        </ScrollView>
      </View>

      {/* Daftar Transaksi */}
      <FlatList
        data={TRANSACTION_DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16, gap: 16 }}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "#f0f0f0",
              padding: 12,
              elevation: 2,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
            }}
          >
            {/* Bagian Atas: Info Belanja & Status */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <Image
                  source={{
                    uri: "https://images.tokopedia.net/img/pdp/icons/shopment-bag.png",
                  }}
                  style={{ width: 18, height: 18 }}
                />
                <View>
                  <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                    Belanja
                  </Text>
                  <Text style={{ fontSize: 10, color: "#888" }}>
                    {item.date}
                  </Text>
                </View>
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <View
                  style={{
                    backgroundColor: "#e6f6ec",
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                    borderRadius: 4,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      color: "#00aa5b",
                      fontWeight: "bold",
                    }}
                  >
                    {item.status}
                  </Text>
                </View>
                <MoreVertical size={16} color="#888" />
              </View>
            </View>

            {/* Bagian Tengah: Gambar & Judul */}
            <View
              style={{ flexDirection: "row", gap: 12, alignItems: "center" }}
            >
              <Image
                source={{
                  uri: "https://p16-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2023/12/8/dd8a69bd-1e1f-443b-8191-709a8e747df0.jpg~tplv-aphluv4xwc-white-pad-v1:100:100.webp?lk3s=bcdb6a38&x-expires=1771944558&x-signature=RUHlKn6znytIYHWK5iB9j9weXSQ%3D&x-signature-webp=RUHlKn6znytIYHWK5iB9j9weXSQ%3D&ect=4g",
                }}
                style={{ width: 50, height: 50, borderRadius: 8 }}
                contentFit="contain"
              />
              <View style={{ flex: 1 }}>
                <Text
                  numberOfLines={1}
                  style={{ fontSize: 14, fontWeight: "bold" }}
                >
                  {item.title}
                </Text>
                <Text style={{ fontSize: 12, color: "#888", marginTop: 2 }}>
                  {item.itemCount} barang
                </Text>
              </View>
            </View>

            {/* Bagian Bawah: Total & Tombol */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginTop: 16,
              }}
            >
              <View>
                <Text style={{ fontSize: 11, color: "#888" }}>
                  Total Belanja
                </Text>
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  Rp {item.totalPrice.toLocaleString("id-ID")}
                </Text>
              </View>
              <Pressable
                style={{
                  backgroundColor: "#00aa5b",
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{ color: "#fff", fontWeight: "bold", fontSize: 12 }}
                >
                  Beli Lagi
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
