import { Star } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Pressable, Text, View } from "react-native";

// Definisikan tipe datanya
type ProductType = {
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

export default function ProductLooping() {
  const [data, setData] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Container untuk Grid Produk */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          paddingHorizontal: 12,
          paddingVertical: 10,
        }}
      >
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#00AA5B"
            style={{ flex: 1, marginTop: 50 }}
          />
        ) : (
          data.map((product) => (
            <Pressable
              key={product.id}
              style={{
                width: "48%", // Biar jadi 2 kolom
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
              {/* Gambar Produk */}
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
                    resizeMode: "contain",
                  }}
                />
              </View>

              {/* Detail Produk */}
              <View style={{ padding: 8 }}>
                {/* Judul */}
                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: 13,
                    fontWeight: "500",
                    color: "#212121",
                    height: 38,
                  }}
                >
                  {product.title}
                </Text>

                {/* Harga (Konversi ke Rp) */}
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "800",
                    color: "#F92F5B",
                    marginTop: 4,
                  }}
                >
                  Rp{(product.price * 15000).toLocaleString("id-ID")}
                </Text>

                {/* Badge Hemat */}
                <View
                  style={{
                    backgroundColor: "#FFF0F1",
                    alignSelf: "flex-start",
                    paddingHorizontal: 4,
                    paddingVertical: 2,
                    borderRadius: 4,
                    marginTop: 4,
                  }}
                >
                  <Text
                    style={{ fontSize: 9, color: "#F92F5B", fontWeight: "700" }}
                  >
                    Hemat 1% Pakai Bonus
                  </Text>
                </View>

                {/* Info Rating & Terjual */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 6,
                  }}
                >
                  <Star size={12} color="#FFC400" fill="#FFC400" />
                  <Text
                    style={{ fontSize: 11, color: "#6D7588", marginLeft: 2 }}
                  >
                    {product.rating.rate} | Terjual {product.rating.count}
                  </Text>
                </View>

                {/* Lokasi */}
                <Text style={{ fontSize: 11, color: "#6D7588", marginTop: 4 }}>
                  Jakarta Barat
                </Text>

                {/* Badge Campaign Hijau */}
                <View style={{ flexDirection: "row", marginTop: 8, gap: 4 }}>
                  <View
                    style={{
                      backgroundColor: "#00AA5B",
                      paddingHorizontal: 4,
                      paddingVertical: 1,
                      borderRadius: 2,
                    }}
                  >
                    <Text
                      style={{ color: "#fff", fontSize: 8, fontWeight: "900" }}
                    >
                      RAMADHAN EKSTRA
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#00AA5B",
                      paddingHorizontal: 4,
                      paddingVertical: 1,
                      borderRadius: 2,
                    }}
                  >
                    <Text
                      style={{ color: "#fff", fontSize: 8, fontWeight: "900" }}
                    >
                      GRATIS ONGKIR
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>
          ))
        )}
      </View>
    </View>
  );
}
