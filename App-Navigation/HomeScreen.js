import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

import styles from "./globalStyles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeContainer}>

      <View style={styles.homeHeader}>
        <View>
          <Text style={styles.smallGreeting}>
            WELCOME TO
          </Text>

          <Text style={styles.homeTitle}>
            Market
          </Text>
        </View>

        <View style={styles.profileCircle}>
          <Text style={styles.profileText}>
            M
          </Text>
        </View>
      </View>

      <View style={styles.heroCard}>
        <View style={styles.heroContent}>
          <Text style={styles.heroSmallText}>
            DISCOVER SOMETHING NEW
          </Text>

          <Text style={styles.heroTitle}>
            Everything you need,
            all in one place.
          </Text>

          <Text style={styles.heroDescription}>
            Browse our collection of useful
            products and find something
            perfect for you.
          </Text>

          <TouchableOpacity
            style={styles.heroButton}
            onPress={() => navigation.navigate("Market")}
          >
            <Text style={styles.heroButtonText}>
              Explore Market  →
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.featureTitle}>
        Why Shop With Us?
      </Text>

      <View style={styles.featuresRow}>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>
            ✓
          </Text>

          <Text style={styles.featureText}>
            Quality Products
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>
            ★
          </Text>

          <Text style={styles.featureText}>
            Trusted Items
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>
            ₱
          </Text>

          <Text style={styles.featureText}>
            Great Prices
          </Text>
        </View>

      </View>

    </View>
  );
}