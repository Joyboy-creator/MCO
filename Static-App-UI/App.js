import React, { useState } from "react";

import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import styles from "./styles";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Fashion",
    "Electronics",
    "Accessories",
    "Home",
  ];

  const products = [
    {
      name: "Sneakers",
      category: "Fashion",
      price: "₱2,000",
      image: "👟",
    },
    {
      name: "Wireless Headphones",
      category: "Electronics",
      price: "₱1,899",
      image: "🎧",
    },
    {
      name: "Everyday Backpack",
      category: "Accessories",
      price: "₱999",
      image: "🎒",
    },
    {
      name: "Smart Watch",
      category: "Electronics",
      price: "₱2,499",
      image: "⌚",
    },
    {
      name: "Desk Lamp",
      category: "Home",
      price: "₱799",
      image: "💡",
    },
    {
      name: "Casual T-Shirt",
      category: "Fashion",
      price: "₱599",
      image: "👕",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.smallText}>WELCOME TO</Text>
            <Text style={styles.title}>Market</Text>
          </View>

          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.cartIcon}>🛒</Text>
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>⌕</Text>

          <TextInput
            style={styles.searchInput}
            placeholder="Search products"
            placeholderTextColor="#999"
            value={search}
            onChangeText={setSearch}
          />

          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterIcon}>≡</Text>
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
        >
          {categories.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.categoryButton,
                category === item && styles.activeCategory,
              ]}
              onPress={() => setCategory(item)}
            >
              <Text
                style={[
                  styles.categoryText,
                  category === item && styles.activeCategoryText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured Products */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.productScroll}
        >
          {products.slice(0, 3).map((product) => (
            <View style={styles.productCard} key={product.name}>
              <View style={styles.productImage}>
                <Text style={styles.productEmoji}>
                  {product.image}
                </Text>

                <TouchableOpacity style={styles.favoriteButton}>
                  <Text style={styles.favoriteIcon}>♡</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.productInfo}>
                <Text style={styles.productCategory}>
                  {product.category}
                </Text>

                <Text style={styles.productName}>
                  {product.name}
                </Text>

                <View style={styles.priceRow}>
                  <Text style={styles.productPrice}>
                    {product.price}
                  </Text>

                  <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addIcon}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* All Products */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>All Products</Text>
          <Text style={styles.seeAll}>
            {filteredProducts.length} items
          </Text>
        </View>

        <View style={styles.grid}>
          {filteredProducts.slice(0, 2).map((product) => (
            <View style={styles.productCard} key={product.name}>
              <View style={styles.productImage}>
                <Text style={styles.productEmoji}>
                  {product.image}
                </Text>

                <TouchableOpacity style={styles.favoriteButton}>
                  <Text style={styles.favoriteIcon}>♡</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.productInfo}>
                <Text style={styles.productCategory}>
                  {product.category}
                </Text>

                <Text style={styles.productName}>
                  {product.name}
                </Text>

                <View style={styles.priceRow}>
                  <Text style={styles.productPrice}>
                    {product.price}
                  </Text>

                  <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addIcon}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={{ height: 90 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <View style={styles.activeNavCircle}>
            <Text style={styles.activeNavIcon}>⌂</Text>
          </View>

          <Text style={styles.activeNavText}>Home</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>▢</Text>
          <Text style={styles.navText}>Explore</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>♡</Text>
          <Text style={styles.navText}>Favorites</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>○</Text>
          <Text style={styles.navText}>Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}