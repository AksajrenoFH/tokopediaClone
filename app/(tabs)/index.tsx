import { Image } from "expo-image";
import {
  MapPin,
  MessageCircleMore,
  Search,
  ShoppingCart,
} from "lucide-react-native";
import React, { useEffect, useRef, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  // Otomatis gulir banner
  const scrollViewAuto = useRef<ScrollView>(null);
  const [activeBanner, setActiveBanner] = useState(0);
  const totalBanner = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextBanner = activeBanner >= totalBanner - 1 ? 0 : activeBanner + 1;

      setActiveBanner(nextBanner);

      scrollViewAuto.current?.scrollTo({
        x: nextBanner * 360,
        animated: true,
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [activeBanner]);

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Header */}
        <View style={{ padding: 18, flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Search */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "#e5e7e9",
                borderRadius: 8,
                paddingHorizontal: 12,
                height: 40,
                width: "75%",
              }}
            >
              <Search size={20} color={"#979797"} style={{ marginRight: 8 }} />
              <TextInput
                placeholder="Cari di Tokopedia"
                placeholderTextColor={"#4d4d4d"}
                style={{ flex: 1, fontSize: 14, color: "#000" }}
              />
            </View>
            {/* Icon */}
            <View
              style={{
                flexDirection: "row",
                gap: 16,
              }}
            >
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
        {/* Scroll Banner (Otomatis/Manusl) */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={scrollViewAuto}
          onMomentumScrollEnd={(e) => {
            const offset = e.nativeEvent.contentOffset.x;
            setActiveBanner(Math.round(offset / 360));
          }}
        >
          <Image
            source={{
              uri: "https://p16-images-comn-sg.tokopedia-static.net/tos-alisg-i-zr7vqa5nfb-sg/ce6066f61ef54fc2a3ce4d3b943daae5~tplv-zr7vqa5nfb-resize-jpeg:800:0.webp?ect=4g",
            }}
            style={{ width: 360, height: 120 }}
          />
          <Image
            source={{
              uri: "https://p16-images-comn-sg.tokopedia-static.net/tos-alisg-i-zr7vqa5nfb-sg/f214e48f4448412b8021fe8bcbe057fb~tplv-zr7vqa5nfb-resize-jpeg:800:0.webp?ect=4g",
            }}
            style={{ width: 360, height: 120 }}
          />
          <Image
            source={{
              uri: "https://p16-images-comn-sg.tokopedia-static.net/tos-alisg-i-zr7vqa5nfb-sg/4f95ca31e3cf49089f8fe17e895fae3f~tplv-zr7vqa5nfb-resize-jpeg:800:0.webp?ect=4g",
            }}
            style={{ width: 360, height: 120 }}
          />
          <Image
            source={{
              uri: "https://p16-images-comn-sg.tokopedia-static.net/tos-alisg-i-zr7vqa5nfb-sg/2e6347dbb33f4180a41a5dc9d9b6ba20~tplv-zr7vqa5nfb-resize-jpeg:800:0.webp?ect=4g",
            }}
            style={{ width: 360, height: 120 }}
          />
        </ScrollView>
        {/* Button */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#e4e4e4",
              padding: 6,
              paddingHorizontal: 10,
              borderRadius: 8,
              marginHorizontal: 12,
              marginVertical: 12,
            }}
          >
            <Image
              source={{
                uri: "https://images.tokopedia.net/img/toppay/gopay-120x120.png?ect=4g",
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={{ fontWeight: "700" }}>GoPay & Coins</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#e4e4e4",
              padding: 6,
              paddingHorizontal: 10,
              borderRadius: 8,
              marginRight: 12,
              marginVertical: 12,
            }}
          >
            <Image
              source={{
                uri: "https://p16-images-comn-sg.tokopedia-static.net/tos-alisg-i-zr7vqa5nfb-sg/img/tokopoints/benefit/kupon.png~tplv-zr7vqa5nfb-image.webp?ect=4g",
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={{ fontWeight: "700" }}>Kupon Saya</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#e4e4e4",
              padding: 6,
              paddingHorizontal: 10,
              borderRadius: 8,
              marginRight: 12,
              marginVertical: 12,
            }}
          >
            <MapPin fill={"#00aa5b"} color={"transparent"} />
            <Text style={{ fontWeight: "700" }}>Rumah User</Text>
          </View>
        </ScrollView>
        {/* Another View */}
        <View style={{ padding: 18, flex: 1 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
