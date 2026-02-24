import { Image } from "expo-image";
import { router } from "expo-router";
import {
  MapPin,
  MessageCircleMore,
  Search,
  ShoppingCart,
  Star,
} from "lucide-react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type products = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function index() {
  // Otomatis gulir banner
  const scrollViewAuto = useRef<ScrollView>(null);
  const [activeBanner, setActiveBanner] = useState(0);
  const totalBanner = 4;

  // Fetch data api & load effect
  const [data, setData] = useState<products[]>([]);
  const [isLoad, setIsLoad] = useState(true);

  // gulir banner otomatis
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

  // Fetch data + load
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setIsLoad(false);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <SafeAreaView style={{ marginBottom: 12 }}>
      {/* Header */}
      <View style={{ padding: 18, flex: 1, marginVertical: 18 }}>
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

      <ScrollView>
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
            <Text style={{ fontWeight: "700" }}>Rumah Bambang</Text>
          </View>
        </ScrollView>

        {/* aNOTHER bUTTON (category) */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 12,
            paddingVertical: 10,
            gap: 4,
          }}
        >
          <View
            style={{
              alignItems: "center",
              width: 65,
            }}
          >
            <Image
              source={{
                uri: "https://p16-images-comn-sg.tokopedia-static.net/tos-alisg-i-zr7vqa5nfb-sg/img/iEWsxH/2025/7/17/31bad858-0a6a-4a54-96b2-e91c9f781238.png~tplv-zr7vqa5nfb-white-pad-v1:160:160.webp?ect=4g",
              }}
              style={{ width: 55, height: 55 }}
            />
            <Text
              style={{ fontSize: 13, textAlign: "center" }}
              numberOfLines={2}
            >
              Mulai Langganan
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              width: 65,
            }}
          >
            <Image
              source={{
                uri: "https://p16-images-comn-sg.tokopedia-static.net/tos-alisg-i-zr7vqa5nfb-sg/5d4c4dce8fb8464db370b7b1efbd1bc3~tplv-zr7vqa5nfb-white-pad-v1:160:160.webp?ect=4g",
              }}
              style={{ width: 55, height: 55 }}
            />
            <Text
              style={{ fontSize: 13, textAlign: "center" }}
              numberOfLines={2}
            >
              Ramadhan Ekstra Seru
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              width: 65,
            }}
          >
            <Image
              source={{
                uri: "https://p16-images-comn-sg.tokopedia-static.net/tos-alisg-i-zr7vqa5nfb-sg/img/iEWsxH/2025/4/10/4be149eb-7040-41b2-8267-b5829cf67717.png~tplv-zr7vqa5nfb-white-pad-v1:160:160.webp?ect=4g",
              }}
              style={{ width: 55, height: 55 }}
            />
            <Text
              style={{ fontSize: 13, textAlign: "center" }}
              numberOfLines={2}
            >
              Top-Up & Tagihan
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              width: 65,
            }}
          >
            <Image
              source={{
                uri: "https://p16-images-comn-sg.tokopedia-static.net/tos-alisg-i-zr7vqa5nfb-sg/img/iEWsxH/2025/9/15/e34c7ae5-73e0-491d-9cde-a8e8061270ac.png~tplv-zr7vqa5nfb-white-pad-v1:160:160.webp?ect=4g",
              }}
              style={{ width: 55, height: 55 }}
            />
            <Text
              style={{ fontSize: 13, textAlign: "center" }}
              numberOfLines={2}
            >
              Mail
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              width: 65,
            }}
          >
            <Image
              source={{
                uri: "https://p16-images-comn-sg.tokopedia-static.net/tos-alisg-i-zr7vqa5nfb-sg/img/iEWsxH/2025/7/2/d6103ff4-8936-4106-bb30-39a28b006545.png~tplv-zr7vqa5nfb-white-pad-v1:160:160.webp?ect=4g",
              }}
              style={{ width: 55, height: 55 }}
            />
            <Text
              style={{ fontSize: 13, textAlign: "center" }}
              numberOfLines={2}
            >
              Cicil Tanpa Biaya
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              width: 65,
            }}
          >
            <Image
              source={{
                uri: "https://p16-images-comn-sg.tokopedia-static.net/tos-alisg-i-zr7vqa5nfb-sg/img/iEWsxH/2025/4/10/85c700a8-2955-4627-8d14-8bdee679a2a3.png~tplv-zr7vqa5nfb-white-pad-v1:160:160.webp?ect=4g",
              }}
              style={{ width: 55, height: 55 }}
            />
            <Text
              style={{ fontSize: 13, textAlign: "center" }}
              numberOfLines={2}
            >
              Fashion
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              width: 65,
            }}
          >
            <Image
              source={{
                uri: "https://p16-images-comn-sg.tokopedia-static.net/tos-alisg-i-zr7vqa5nfb-sg/img/iEWsxH/2025/4/10/5cfb909e-5e2c-44ec-8737-6edbd32f0e7a.png~tplv-zr7vqa5nfb-white-pad-v1:160:160.webp?ect=4g",
              }}
              style={{ width: 55, height: 55 }}
            />
            <Text
              style={{ fontSize: 13, textAlign: "center" }}
              numberOfLines={2}
            >
              Beauty
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              width: 65,
            }}
          >
            <Image
              source={{
                uri: "https://p16-images-comn-sg.tokopedia-static.net/tos-alisg-i-zr7vqa5nfb-sg/img/iEWsxH/2025/4/10/af46bb40-5aea-4fc5-94fe-a8064b15a11b.png~tplv-zr7vqa5nfb-white-pad-v1:160:160.webp?ect=4g",
              }}
              style={{ width: 55, height: 55 }}
            />
            <Text
              style={{ fontSize: 13, textAlign: "center" }}
              numberOfLines={2}
            >
              Tokopedia Farma
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              width: 65,
            }}
          >
            <Image
              source={{
                uri: "https://p16-images-comn-sg.tokopedia-static.net/tos-alisg-i-zr7vqa5nfb-sg/img/iEWsxH/2024/9/12/a678ed43-dc1e-4e21-9750-d8844e229f5e.png~tplv-zr7vqa5nfb-white-pad-v1:160:160.webp?ect=4g",
              }}
              style={{ width: 55, height: 55 }}
            />
            <Text
              style={{ fontSize: 13, textAlign: "center" }}
              numberOfLines={2}
            >
              Promo Hari ini
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              width: 65,
            }}
          >
            <Image
              source={{
                uri: "https://p16-images-comn-sg.tokopedia-static.net/tos-alisg-i-zr7vqa5nfb-sg/img/iEWsxH/2025/4/10/a1d2cea4-53a3-4c4d-9ab0-22657f248ba3.png~tplv-zr7vqa5nfb-white-pad-v1:160:160.webp?ect=4g",
              }}
              style={{ width: 55, height: 55 }}
            />
            <Text
              style={{ fontSize: 13, textAlign: "center" }}
              numberOfLines={2}
            >
              Beli Lokal
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              width: 65,
            }}
          >
            <Image
              source={{
                uri: "https://p16-images-comn-sg.tokopedia-static.net/tos-alisg-i-zr7vqa5nfb-sg/img/iEWsxH/2025/4/10/1bca53e5-d169-4bb9-93b5-e03e4350acc4.png~tplv-zr7vqa5nfb-white-pad-v1:160:160.webp?ect=4g",
              }}
              style={{ width: 55, height: 55 }}
            />
            <Text
              style={{ fontSize: 13, textAlign: "center" }}
              numberOfLines={2}
            >
              Produk Terbaru
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              width: 65,
            }}
          >
            <Image
              source={{
                uri: "https://p16-images-comn-sg.tokopedia-static.net/tos-alisg-i-zr7vqa5nfb-sg/img/iEWsxH/2025/4/10/c34139d1-0033-4cad-a006-cbeaa2ccc41a.png~tplv-zr7vqa5nfb-white-pad-v1:160:160.webp?ect=4g",
              }}
              style={{ width: 55, height: 55 }}
            />
            <Text
              style={{ fontSize: 13, textAlign: "center" }}
              numberOfLines={2}
            >
              Keuangan
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              width: 65,
            }}
          >
            <Image
              source={{
                uri: "https://p16-images-comn-sg.tokopedia-static.net/tos-alisg-i-zr7vqa5nfb-sg/img/iEWsxH/2025/4/10/3438a348-9095-471b-9e99-f48314bca87e.png~tplv-zr7vqa5nfb-white-pad-v1:160:160.webp?ect=4g",
              }}
              style={{ width: 55, height: 55 }}
            />
            <Text
              style={{ fontSize: 13, textAlign: "center" }}
              numberOfLines={2}
            >
              Lihat Semua
            </Text>
          </View>
        </ScrollView>

        {/* History */}
        <View
          style={{
            flexDirection: "column",
            paddingHorizontal: 12,
            paddingVertical: 10,
            gap: 4,
          }}
        >
          <Text
            style={{
              marginLeft: 12,
              fontSize: 18,
              fontWeight: "700",
              margin: 8,
            }}
          >
            Lanjut cek ini, yuk
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexDirection: "row" }}
          >
            <View style={{ gap: 8, width: 120 }}>
              <Image
                source={{
                  uri: "https://p16-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2022/5/12/08d3bb06-8036-46c6-b42d-d4cb07417660.jpg~tplv-aphluv4xwc-white-pad-v1:200:200.jpeg?lk3s=67a35ccb&x-expires=1770782756&x-signature=LzfLj3QoYp62qytp3AZAwsFR2uU%3D&x-signature-webp=ITomjO9GRbk1nkG%2BWlAFiZJJMEs%3D&ect=4g",
                }}
                style={{ width: 110, height: 110, borderRadius: 12 }}
              />
              <View>
                <Text style={{ fontSize: 13, fontWeight: "600" }}>
                  Balik lihat
                </Text>
                <Text style={{ fontSize: 12 }}>Batu Mulia & Batu Alam</Text>
              </View>
            </View>
            <View style={{ gap: 8, width: 120 }}>
              <Image
                source={{
                  uri: "https://p16-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/3e4ac74b59274c42870477d02da72979~tplv-aphluv4xwc-white-pad-v1:200:200.jpeg?lk3s=67a35ccb&x-expires=1770783228&x-signature=srLh2EhrwBzQ1tHKdHA4nnHGRKo%3D&x-signature-webp=CBwfFmxSOkQo0qZpZeHP54P23Io%3D&ect=4g",
                }}
                style={{ width: 110, height: 110, borderRadius: 12 }}
              />
              <View>
                <Text style={{ fontSize: 13, fontWeight: "600" }}>
                  Terakhir cek
                </Text>
                <Text style={{ fontSize: 12 }}>Kandang Ayam</Text>
              </View>
            </View>
            <View style={{ gap: 8, width: 120 }}>
              <Image
                source={{
                  uri: "https://p16-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/fccb580cae3e404ebb8fcf405392bc61~tplv-aphluv4xwc-white-pad-v1:200:200.jpeg?lk3s=67a35ccb&x-expires=1770789991&x-signature=SWZlvkSbsYyB7a90y66vfSBEwL0%3D&x-signature-webp=vuoqbOdt5sXF6r8Ylsg7Z03jjDU%3D&ect=4g",
                }}
                style={{ width: 110, height: 110, borderRadius: 12 }}
              />
              <View>
                <Text style={{ fontSize: 13, fontWeight: "600" }}>
                  Incaranmu
                </Text>
                <Text style={{ fontSize: 12 }}>Teh</Text>
              </View>
            </View>
            <View style={{ gap: 8, width: 120 }}>
              <Image
                source={{
                  uri: "https://p16-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/img/hDjmkQ/2023/10/24/98080c45-5734-41d2-9e41-7e68a373cf65.jpg~tplv-aphluv4xwc-white-pad-v1:200:200.jpeg?lk3s=67a35ccb&x-expires=1770783273&x-signature=MmbcbPZ4aWIVnPhHDNICjguDAhM%3D&x-signature-webp=DS6b857B3%2FtCkhWIXVlpmEfJ%2Bys%3D&ect=4g",
                }}
                style={{ width: 110, height: 110, borderRadius: 12 }}
              />
              <View>
                <Text style={{ fontSize: 13, fontWeight: "600" }}>
                  Siap dibeli
                </Text>
                <Text style={{ fontSize: 12 }}>Alas Kandang Hewan</Text>
              </View>
            </View>
            <View style={{ gap: 8, width: 120 }}>
              <Image
                source={{
                  uri: "https://p16-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/img/hDjmkQ/2025/1/24/7f5b5e81-898f-413d-9b6c-b9c1fa2a9f80.jpg~tplv-aphluv4xwc-white-pad-v1:200:200.jpeg?lk3s=67a35ccb&x-expires=1770783288&x-signature=EOuX39oGbzieWMJuS2q6SvGxhBY%3D&x-signature-webp=SAgOm5xUYYkxEKMAUVZ9rmvxZRY%3D&ect=4g",
                }}
                style={{ width: 110, height: 110, borderRadius: 12 }}
              />
              <View>
                <Text style={{ fontSize: 13, fontWeight: "600" }}>
                  Eksplor lagi
                </Text>
                <Text style={{ fontSize: 12 }}>Makanan Kucing</Text>
              </View>
            </View>
            <View style={{ gap: 8, width: 120 }}>
              <Image
                source={{
                  uri: "https://p16-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2022/10/25/76a3cfde-a764-4441-9b5a-1e57c5fba662.png~tplv-aphluv4xwc-white-pad-v1:200:200.jpeg?lk3s=67a35ccb&x-expires=1770783306&x-signature=Y7PcgiufWy5Rvn2JbmaW96bNH7Y%3D&x-signature-webp=rfl3rIaozIIqvSPUwENNpcFpBWM%3D&ect=4g",
                }}
                style={{ width: 110, height: 110, borderRadius: 12 }}
              />
              <View>
                <Text style={{ fontSize: 13, fontWeight: "600" }}>
                  Lanjut cari
                </Text>
                <Text style={{ fontSize: 12 }}>Makanan Anjing</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Category Produk (displau doang) */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 12,
            paddingVertical: 10,
            gap: 10,
          }}
        >
          <View
            style={{
              alignItems: "center",
              width: 120,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                textAlign: "center",
                color: "#00AA5B",
                fontWeight: "600",
              }}
            >
              For Bambang
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#00AA5B",
                width: "60%",
                marginTop: 10,
              }}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              width: 120,
            }}
          >
            <Image
              source={{
                uri: "https://p16-images-comn-sg.tokopedia-static.net/tos-alisg-i-zr7vqa5nfb-sg/9994d50230b647198c39cfa3a2087899~tplv-zr7vqa5nfb-resize-jpeg:250:0.webp?ect=4g",
              }}
              style={{
                width: 72,
                height: 24,
              }}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              width: 120,
            }}
          >
            <Image
              source={{
                uri: "https://p16-images-comn-sg.tokopedia-static.net/tos-alisg-i-zr7vqa5nfb-sg/img/ndZFpx/2025/9/15/f2b4d9cf-fbcd-4ac7-a205-5538a2e85c2b.png~tplv-zr7vqa5nfb-resize-jpeg:250:0.webp?ect=4g",
              }}
              style={{
                width: 72,
                height: 24,
              }}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              width: 120,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                textAlign: "center",
                color: "#000",
              }}
            >
              Produk Incaranmu
            </Text>
          </View>
        </ScrollView>

        {/* Another View */}
        <View style={{ padding: 4, paddingTop: 0, flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              paddingHorizontal: 12,
              paddingVertical: 10,
            }}
          >
            {isLoad ? (
              <ActivityIndicator
                size={30}
                color={"#00AA5B"}
                style={{ flex: 1 }}
              />
            ) : (
              data.map((product) => (
                <Pressable
                  key={product.id}
                  onPress={() => {
                    router.push({
                      pathname: "/detailProduct",
                      params: { product: JSON.stringify(product) },
                    });
                  }}
                  style={{
                    width: "48%",
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    marginBottom: 16,
                    borderWidth: 1,
                    borderColor: "#f0f0f0",
                    elevation: 2,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  {/* Gambar */}
                  <View
                    style={{
                      width: "100%",
                      height: 150,
                      backgroundColor: "#fff",
                      padding: 10,
                    }}
                  >
                    <Image
                      source={{ uri: product.image }}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      contentFit="contain"
                    />
                  </View>
                  {/* Text */}
                  <View style={{ padding: 6, gap: 4 }}>
                    {/* Title */}
                    <Text numberOfLines={2}>{product.title}</Text>
                    {/* Price */}
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "flex-end",
                      }}
                    >
                      <Text style={{ fontWeight: "600", fontSize: 12 }}>$</Text>
                      <Text style={{ fontWeight: "600", fontSize: 16 }}>
                        {product.price}
                      </Text>
                    </View>
                    {/* Rate */}
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <Star
                        fill={"#e9ca1bff"}
                        color={"transparent"}
                        size={16}
                      />
                      <Text style={{ color: "#8a8a8a", fontSize: 12 }}>
                        {product.rating.rate}
                      </Text>
                      <Text style={{ color: "#8a8a8a", fontSize: 12 }}>•</Text>
                      <Text style={{ color: "#8a8a8a", fontSize: 12 }}>
                        {product.rating.count} Terjual
                      </Text>
                    </View>
                  </View>
                </Pressable>
              ))
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
