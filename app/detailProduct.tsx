import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import {
  ChevronLeft,
  Heart,
  MessageCircleMore,
  Search,
  ShoppingCart,
  Star,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

type products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function DetailProduct() {
  const param = useLocalSearchParams();
  const product: products = JSON.parse(param.product as string);

  const [isWish, setIsWish] = useState(false);
  const [otherProducts, setOtherProducts] = useState<products[]>([]);

  // Simulasi mengambil produk lain di toko (berdasarkan kategori yang sama)
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((json) =>
        setOtherProducts(json.filter((p: products) => p.id !== product.id)),
      )
      .catch((err) => console.error(err));
  }, [product.category]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderBottomWidth: 1,
          borderBottomColor: "#f0f0f0",
        }}
      >
        <Pressable onPress={() => router.back()}>
          <ChevronLeft color="#000" size={28} />
        </Pressable>
        <View style={{ flexDirection: "row", gap: 18, alignItems: "center" }}>
          <Search color="#000" size={24} />
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
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Gambar Produk Utama */}
        <View style={{ padding: 12, backgroundColor: "#fff" }}>
          <Image
            source={{ uri: product.image }}
            style={{ width: "100%", height: 350 }}
            contentFit="contain"
          />
        </View>

        {/* Info Harga & Judul */}
        <View style={{ padding: 16, gap: 4 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              ${product.price}
            </Text>
            <Pressable onPress={() => setIsWish(!isWish)}>
              <Heart
                size={24}
                color={isWish ? "#ff0000" : "#000"}
                fill={isWish ? "#ff0000" : "transparent"}
              />
            </Pressable>
          </View>
          <Text style={{ fontSize: 16, color: "#333", lineHeight: 22 }}>
            {product.title}
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              marginTop: 4,
            }}
          >
            <Star fill={"#FFC400"} color={"#FFC400"} size={16} />
            <Text style={{ fontSize: 14, fontWeight: "500" }}>
              {product.rating.rate}
            </Text>
            <Text style={{ color: "#8a8a8a" }}>({product.rating.count})</Text>
            <Text style={{ color: "#8a8a8a" }}>•</Text>
            <Text style={{ color: "#8a8a8a" }}>
              Terjual {Math.floor(Math.random() * 500)}+
            </Text>
          </View>
        </View>

        {/* Divider Abu-abu Tebal kyk Tokopedia */}
        <View style={{ height: 8, backgroundColor: "#f0f2f5" }} />

        {/* Section Lainnya di toko ini */}
        <View style={{ paddingVertical: 16 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 16,
              marginBottom: 12,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Lainnya di toko ini
            </Text>
            <Text
              style={{ color: "#00aa5b", fontWeight: "bold" }}
              onPress={() => router.push("/(tabs)")}
            >
              Lihat Semua
            </Text>
          </View>

          <FlatList
            horizontal
            data={otherProducts}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 16 }}
            renderItem={({ item }) => (
              <Pressable
                style={{
                  width: 140,
                  marginRight: 12,
                  borderWidth: 1,
                  borderColor: "#e5e7e9",
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "100%", height: 140 }}
                  contentFit="contain"
                />
                <View style={{ padding: 8 }}>
                  <Text numberOfLines={2} style={{ fontSize: 12, height: 32 }}>
                    {item.title}
                  </Text>
                  <Text style={{ fontWeight: "bold", marginTop: 4 }}>
                    ${item.price}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 4,
                      gap: 2,
                    }}
                  >
                    <Star fill={"#FFC400"} color={"#FFC400"} size={10} />
                    <Text style={{ fontSize: 10, color: "#8a8a8a" }}>
                      {item.rating.rate} | {item.rating.count}+ terjual
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>

        <View style={{ height: 8, backgroundColor: "#f0f2f5" }} />

        {/* Detail Produk Section */}
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 12 }}>
            Detail Produk
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              borderBottomColor: "#f0f0f0",
              paddingBottom: 8,
            }}
          >
            <Text style={{ width: 100, color: "#8a8a8a" }}>Kategori</Text>
            <Text style={{ color: "#00aa5b", fontWeight: "600" }}>
              {product.category.toUpperCase()}
            </Text>
          </View>
          <View style={{ marginTop: 12 }}>
            <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 4 }}>
              Deskripsi
            </Text>
            <Text style={{ color: "#333", lineHeight: 20 }}>
              {product.description}
            </Text>
          </View>
        </View>

        {/* Padding bawah agar tidak tertutup footer */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Sticky Footer Button */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          flexDirection: "row",
          padding: 12,
          paddingBottom: 50,
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#f0f0f0",
          gap: 8,
          alignItems: "center",
        }}
      >
        <Pressable
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#00aa5b",
            borderRadius: 8,
            paddingVertical: 12,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#00aa5b", fontWeight: "bold" }}>
            Beli Langsung
          </Text>
        </Pressable>
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "#00aa5b",
            borderRadius: 8,
            paddingVertical: 12,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>+ Keranjang</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
