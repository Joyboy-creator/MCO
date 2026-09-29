import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

import styles from "./globalStyles";

const products = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 1299,
    category: "Electronics",
    rating: 4.8,
    reviews: 124,
    stock: 15,
    brand: "SoundMax",
    description:
      "Enjoy clear and immersive audio with these comfortable wireless headphones. Perfect for music, studying, gaming, and everyday use.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: "2",
    name: "Mechanical Keyboard",
    price: 1899,
    category: "Computer Accessories",
    rating: 4.7,
    reviews: 89,
    stock: 8,
    brand: "KeyPro",
    description:
      "A compact mechanical keyboard designed for comfortable typing and gaming. Features responsive keys and a durable construction.",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: "3",
    name: "Gaming Mouse",
    price: 899,
    category: "Computer Accessories",
    rating: 4.6,
    reviews: 76,
    stock: 20,
    brand: "GameTech",
    description:
      "A lightweight and responsive gaming mouse with accurate tracking. Great for gaming, school work, and everyday computer use.",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: "4",
    name: "Phone Stand",
    price: 399,
    category: "Mobile Accessories",
    rating: 4.5,
    reviews: 51,
    stock: 25,
    brand: "DeskMate",
    description:
      "A simple adjustable phone stand that keeps your device stable and visible on your desk. Ideal for watching videos and video calls.",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: "5",
    name: "USB-C Cable",
    price: 249,
    category: "Accessories",
    rating: 4.4,
    reviews: 63,
    stock: 30,
    brand: "ConnectX",
    description:
      "A durable USB-C cable suitable for charging and data transfer. Compact and convenient for everyday use.",
    image:
      "https://images.unsplash.com/photo-1591290619762-c588e43e9f8b?auto=format&fit=crop&w=800&q=80",
  },
];

export default function MarketScreen({ navigation }) {
  const openProduct = (product) => {
    navigation.navigate("ProductDetails", {
      name: product.name,
      price: product.price,
      category: product.category,
      rating: product.rating,
      reviews: product.reviews,
      stock: product.stock,
      brand: product.brand,
      description: product.description,
      image: product.image,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Explore Products</Text>

      <Text style={styles.sectionSubtitle}>
        Find useful products for your everyday needs.
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() => openProduct(item)}
            activeOpacity={0.85}
          >
            <Image
              source={{ uri: item.image }}
              style={styles.productImage}
            />

            <View style={styles.productInfo}>
              <Text style={styles.productCategory}>
                {item.category}
              </Text>

              <Text style={styles.productName}>
                {item.name}
              </Text>

              <View style={styles.ratingRow}>
                <Text style={styles.rating}>
                  ★ {item.rating}
                </Text>

                <Text style={styles.reviews}>
                  ({item.reviews} reviews)
                </Text>
              </View>

              <View style={styles.productBottom}>
                <Text style={styles.productPrice}>
                  ₱{item.price.toLocaleString()}
                </Text>

                <Text style={styles.stock}>
                  {item.stock} in stock
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}