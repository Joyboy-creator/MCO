import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import styles from "./globalStyles";

export default function ProductDetails({ route, navigation }) {
  const {
    name,
    price,
    category,
    rating,
    reviews,
    stock,
    brand,
    description,
    image,
  } = route.params;

  return (
    <ScrollView
      style={styles.detailsContainer}
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={{ uri: image }}
        style={styles.detailsImage}
      />

      <View style={styles.detailsContent}>
        <Text style={styles.detailsCategory}>
          {category}
        </Text>

        <Text style={styles.detailsTitle}>
          {name}
        </Text>

        <Text style={styles.detailsBrand}>
          Brand: {brand}
        </Text>

        <View style={styles.detailsRatingRow}>
          <Text style={styles.detailsRating}>
            ★ {rating}
          </Text>

          <Text style={styles.detailsReviews}>
            {reviews} reviews
          </Text>
        </View>

        <Text style={styles.detailsPrice}>
          ₱{price.toLocaleString()}
        </Text>

        <View style={styles.stockBox}>
          <Text style={styles.stockLabel}>
            Availability
          </Text>

          <Text style={styles.stockValue}>
            {stock} items available
          </Text>
        </View>

        <Text style={styles.descriptionTitle}>
          Product Description
        </Text>

        <Text style={styles.detailsDescription}>
          {description}
        </Text>

        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => {}}
        >
          <Text style={styles.cartButtonText}>
            Add to Cart
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>
            ← Go Back
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}