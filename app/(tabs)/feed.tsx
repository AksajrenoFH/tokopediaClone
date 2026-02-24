import { useIsFocused } from "@react-navigation/native";
import { Image } from "expo-image";
import { useVideoPlayer, VideoView } from "expo-video";
import { Heart, MessageCircle, Send } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { Dimensions, Pressable, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

const videoSource = require("./../../assets/my/warwarwar.mp4");

export default function FeedScreen() {
  const isFocused = useIsFocused(); // biar kepause pas pindah page
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(998);
  const [isExpanded, setIsExpanded] = useState(false); // ...Selengkapnya

  const fullText =
    "Awwas nanti barang lu di looting sama princess #kobokanaeru #tokopedia #fyp #viral #fypppppppppppp #fypシ #dukungToshiXAmanda #bknDuolingo";

  const perWord = fullText.split(" ");
  const longText = perWord.length > 10;
  const truncatedText = perWord.slice(0, 8).join(" ");

  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
  });

  useEffect(() => {
    if (isFocused) {
      player.replay();
      player.play();
    } else {
      player.pause();
    }
  }, [isFocused, player]);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <VideoView
        player={player}
        style={{
          position: "absolute",
          width: width,
          height: height,
        }}
        contentFit="cover"
        nativeControls={false}
      />

      {/* Top Tabs */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 20,
          marginTop: 60,
          zIndex: 10,
        }}
      >
        <Text
          style={{
            color: "#eee",
            fontWeight: "bold",
            fontSize: 16,
            opacity: 0.8,
          }}
        >
          Mengikuti
        </Text>
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#fff" }}>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 16,
              paddingBottom: 4,
            }}
          >
            Buat Kamu
          </Text>
        </View>
      </View>

      {/* Right Actions Bar */}
      <View
        style={{
          position: "absolute",
          right: 12,
          bottom: 120,
          alignItems: "center",
          gap: 22,
          zIndex: 20,
        }}
      >
        <View style={{ marginBottom: 10 }}>
          <Image
            source={{
              uri: "https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/784d23ef59675b77b62eab7682b8e36d~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=c5cfcc6e&x-expires=1772114400&x-signature=3B3t6ovLmtdBNDIhj6%2Ftp6CbRsg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2",
            }}
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              borderWidth: 1.5,
              borderColor: "#fff",
            }}
          />
        </View>

        <Pressable onPress={handleLike} style={{ alignItems: "center" }}>
          <Heart
            size={35}
            color={isLiked ? "#ff4d4d" : "#fff"}
            fill={isLiked ? "#ff4d4d" : "transparent"}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 13,
              fontWeight: "bold",
              marginTop: 4,
            }}
          >
            {likeCount}
          </Text>
        </Pressable>

        <View style={{ alignItems: "center" }}>
          <MessageCircle size={35} color="#fff" />
          <Text
            style={{
              color: "#fff",
              fontSize: 13,
              fontWeight: "bold",
              marginTop: 4,
            }}
          >
            1.2K
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Send size={35} color="#fff" />
          <Text
            style={{
              color: "#fff",
              fontSize: 13,
              fontWeight: "bold",
              marginTop: 4,
            }}
          >
            759
          </Text>
        </View>
      </View>

      {/* Bottom Info Section */}
      <View
        style={{
          position: "absolute",
          bottom: 40,
          left: 16,
          right: 80,
          zIndex: 20,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 17,
            marginBottom: 6,
          }}
        >
          Toko Tokped
        </Text>

        <Pressable
          onPress={() => longText && setIsExpanded(!isExpanded)}
          style={{
            backgroundColor: isExpanded ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
            padding: 10,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 15, lineHeight: 20 }}>
            {isExpanded || !longText ? fullText : truncatedText}

            {longText && !isExpanded && (
              <Text style={{ fontWeight: "bold", color: "#9e9e9e" }}>
                {" "}
                ... Selengkapnya
              </Text>
            )}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
