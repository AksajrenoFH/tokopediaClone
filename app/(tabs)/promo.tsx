import { Image } from "expo-image";
import {
  ChevronDown,
  MapPin,
  MessageCircleMore,
  Search,
  ShoppingCart,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
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

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: { rate: number; count: number };
};

export default function PromoScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        // Kita acak datanya biar berasa "Promo Spesial"
        setProducts(json.sort(() => Math.random() - 0.5));
        setLoading(false);
      })
      .catch((e) => console.error(e));
  }, []);

  const renderProduct = ({ item }: { item: Product }) => (
    <View
      style={{
        width: width / 2 - 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        margin: 6,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        overflow: "hidden",
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: "100%", height: 150 }}
        contentFit="contain"
      />
      <View style={{ padding: 10 }}>
        <Text numberOfLines={2} style={{ fontSize: 13, height: 35 }}>
          {item.title}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 5 }}>
          ${item.price}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
            gap: 4,
          }}
        >
          <Text
            style={{
              fontSize: 11,
              color: "#fff",
              backgroundColor: "#ff0000",
              paddingHorizontal: 4,
              borderRadius: 2,
              fontWeight: "bold",
            }}
          >
            24%
          </Text>
          <Text
            style={{
              fontSize: 11,
              color: "#888",
              textDecorationLine: "line-through",
            }}
          >
            ${(item.price * 1.2).toFixed(2)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 8,
            gap: 4,
          }}
        >
          <Image
            source={{
              uri: "https://images.tokopedia.net/img/official_store/badge_os.png",
            }}
            style={{ width: 14, height: 14 }}
          />
          <Text style={{ fontSize: 11, color: "#888" }}>
            {item.rating.rate} | {item.rating.count}+ terjual
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      {/* 1. Green Header Section */}
      <View style={{ backgroundColor: "#00aa5b", paddingBottom: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 10,
            gap: 12,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              backgroundColor: "#fff",
              borderRadius: 8,
              alignItems: "center",
              paddingHorizontal: 10,
              height: 40,
            }}
          >
            <Search size={18} color="#888" />
            <TextInput
              placeholder="Cari di Tokopedia"
              style={{ flex: 1, marginLeft: 8, fontSize: 14 }}
            />
          </View>
          <MessageCircleMore color="#fff" size={24} />
          <ShoppingCart color="#fff" size={24} />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 15,
            gap: 4,
          }}
        >
          <MapPin size={14} color="#fff" />
          <Text style={{ color: "#fff", fontSize: 12 }}>Dikirim ke</Text>
          <Text style={{ color: "#fff", fontSize: 12, fontWeight: "bold" }}>
            Rumah Aksa
          </Text>
          <ChevronDown size={14} color="#fff" />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 2. Banner/Spesial Promo Area (Polos Hijau) */}
        <View
          style={{
            backgroundColor: "#00aa5b",
            padding: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Promo spesial hari ini
          </Text>
          <Text style={{ color: "#fff", fontSize: 13, opacity: 0.9 }}>
            Banyak promo yang pas buat kamu!
          </Text>
        </View>

        {/* 3. Tab Kupon & Promo */}
        <View style={{ flexDirection: "row", padding: 15, gap: 10 }}>
          <Pressable
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "#e5e7e9",
              borderRadius: 8,
              paddingVertical: 8,
              gap: 8,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "600" }}>🎟️ Promo</Text>
          </Pressable>
          <Pressable
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "#e5e7e9",
              borderRadius: 8,
              paddingVertical: 8,
              gap: 8,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "600" }}>🎫 Kupon</Text>
          </Pressable>
        </View>

        {/* 4. Horizontal Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15, marginBottom: 15 }}
        >
          {["Semua Promo", "Makanan", "Kesehatan", "Elektronik", "Fashion"].map(
            (cat, index) => (
              <Pressable
                key={index}
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 8,
                  borderRadius: 20,
                  backgroundColor: index === 0 ? "#e6f6ec" : "#fff",
                  borderWidth: 1,
                  borderColor: index === 0 ? "#00aa5b" : "#e5e7e9",
                  marginRight: 8,
                }}
              >
                <Text
                  style={{
                    color: index === 0 ? "#00aa5b" : "#666",
                    fontWeight: "600",
                    fontSize: 13,
                  }}
                >
                  {cat}
                </Text>
              </Pressable>
            ),
          )}
        </ScrollView>

        {/* 5. Product Grid */}
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          scrollEnabled={false} // Biar ScrollView utama yang handle
          contentContainerStyle={{ paddingHorizontal: 10 }}
        />

        <View style={{ height: 50 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
