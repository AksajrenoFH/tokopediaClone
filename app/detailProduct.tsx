import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircleMore,
  Search,
  ShoppingCart,
  Star,
} from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

export default function detailProduct() {
  // Parameter
  const param = useLocalSearchParams();
  const product: products = JSON.parse(param.product as string);

  // transaksi
  const [getCart, setGetCart] = useState(0);

  // Wishlist (display)
  const [isWish, setIsWish] = useState(true);

  return (
    <SafeAreaView>
      {/* Header */}
      <View style={{ padding: 18, flex: 1, marginVertical: 18 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "50%",
            }}
          >
            <ChevronLeft
              onPress={() => {
                router.push("/(tabs)");
              }}
            />
          </View>
          {/* Icon */}
          <View
            style={{
              flexDirection: "row",
              gap: 16,
            }}
          >
            <Search />
            {/* Notif Merag */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#e5e7e9",
                borderRadius: 8,
              }}
            >
              <MessageCircleMore />
              <View
                style={{
                  position: "absolute",
                  right: -4,
                  top: -5,
                  backgroundColor: "#ff0000",
                  borderRadius: 100,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: "#fff",
                    paddingVertical: 1,
                    paddingHorizontal: 2,
                  }}
                >
                  1
                </Text>
              </View>
            </View>
            <ShoppingCart />
          </View>
        </View>
      </View>

      <ScrollView>
        {/* Gambar */}
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#b9b9b9",
            padding: 12,
          }}
        >
          <Image
            source={{ uri: product.image }}
            style={{
              width: "100%",
              height: 300,
            }}
            contentFit="contain"
          />
        </View>
        {/* Text */}
        <View style={{ padding: 12, gap: 8 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: 22 }}>$</Text>
            <Text style={{ fontWeight: "600", fontSize: 26 }}>
              {product.price}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 18, width: "80%" }} numberOfLines={2}>
              {product.title}
            </Text>
            <Pressable
              onPress={() => {
                setIsWish(!isWish);
              }}
            >
              <Heart
                size={24}
                color={isWish ? "#000" : "transparent"}
                fill={isWish ? "transparent" : "#ff0000"}
              />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              borderBottomWidth: 1,
              borderColor: "#00000020",
              paddingBottom: 10,
            }}
          >
            <Star fill={"#e9ca1bff"} color={"transparent"} size={20} />
            <Text style={{ color: "#8a8a8a", fontSize: 16 }}>
              {product.rating.rate}
            </Text>
            <Text style={{ color: "#8a8a8a", fontSize: 16 }}>•</Text>
            <Text style={{ color: "#8a8a8a", fontSize: 16 }}>
              {product.rating.count} Terjual
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 8,
              }}
            >
              <Image
                source={{
                  uri: "https://images.tokopedia.net/img/pdp/icons/shipment-truck-grey.png",
                }}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <Text style={{ fontSize: 14, fontWeight: "600" }}>
                Ongkir mulai $2
              </Text>
              <Text style={{ fontSize: 14, color: "#00000070" }}>
                Est. tiba 3-5 hari
              </Text>
            </View>
            <ChevronRight />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
