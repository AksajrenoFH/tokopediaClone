import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function splash() {
  const router = useRouter();

  const timer = setTimeout(() => {
    router.replace("/");

    return () => clearTimeout(timer);
  }, 5000);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#00aa5b",
        width: "100%",
        height: "100%",
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
        }}
      >
        <Image
          source={require("./../assets/my/tokped.png")}
          style={{ width: 150, height: 30 }}
        />
        <Image
          source={require("./../assets/my/plusTokped.png")}
          style={{ width: 180, height: 40 }}
        />
        <Text style={{ fontSize: 20, color: "#fff" }}>Banyak PLUS nya!</Text>
      </View>
    </SafeAreaView>
  );
}
