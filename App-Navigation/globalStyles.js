import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  // ==========================================
  // HOME
  // ==========================================

  homeContainer: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    paddingHorizontal: 20,
    paddingTop: 25,
  },

  homeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  smallGreeting: {
    fontSize: 11,
    fontWeight: "700",
    color: "#8A94A6",
    letterSpacing: 1.5,
    marginBottom: 3,
  },

  homeTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#172033",
  },

  profileCircle: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#172033",
    justifyContent: "center",
    alignItems: "center",
  },

  profileText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },

  // ==========================================
  // HERO
  // ==========================================

  heroCard: {
    backgroundColor: "#172033",
    borderRadius: 24,
    padding: 25,
    minHeight: 330,
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },

  heroContent: {
    maxWidth: 330,
  },

  heroSmallText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#AAB4C5",
    letterSpacing: 1.5,
    marginBottom: 15,
  },

  heroTitle: {
    fontSize: 31,
    lineHeight: 38,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 15,
  },

  heroDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: "#B9C1CF",
    marginBottom: 25,
  },

  heroButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: "flex-start",
  },

  heroButtonText: {
    color: "#172033",
    fontSize: 14,
    fontWeight: "700",
  },

  // ==========================================
  // FEATURES
  // ==========================================

  featureTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#172033",
    marginTop: 28,
    marginBottom: 15,
  },

  featuresRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  featureCard: {
    backgroundColor: "#FFFFFF",
    width: "31%",
    minHeight: 95,
    borderRadius: 14,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#E9ECF1",
  },

  featureIcon: {
    fontSize: 20,
    fontWeight: "800",
    color: "#172033",
    marginBottom: 7,
  },

  featureText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#697386",
    textAlign: "center",
  },

  // ==========================================
  // MARKET
  // ==========================================

  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#172033",
    marginBottom: 5,
  },

  sectionSubtitle: {
    fontSize: 14,
    color: "#8A94A6",
    marginBottom: 20,
  },

  productCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    marginBottom: 15,
    overflow: "hidden",

    borderWidth: 1,
    borderColor: "#E9ECF1",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 7,
    elevation: 2,
  },

  productImage: {
    width: "100%",
    height: 180,
    backgroundColor: "#F0F1F3",
  },

  productInfo: {
    padding: 17,
  },

  productCategory: {
    fontSize: 11,
    fontWeight: "700",
    color: "#8A94A6",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 6,
  },

  productName: {
    fontSize: 19,
    fontWeight: "800",
    color: "#172033",
    marginBottom: 8,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  rating: {
    fontSize: 13,
    fontWeight: "700",
    color: "#172033",
  },

  reviews: {
    fontSize: 12,
    color: "#8A94A6",
    marginLeft: 6,
  },

  productBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  productPrice: {
    fontSize: 20,
    fontWeight: "800",
    color: "#172033",
  },

  stock: {
    fontSize: 12,
    color: "#6E7787",
  },

  // ==========================================
  // PRODUCT DETAILS
  // ==========================================

  detailsContainer: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },

  detailsImage: {
    width: "100%",
    height: 300,
    backgroundColor: "#F0F1F3",
  },

  detailsContent: {
    padding: 22,
  },

  detailsCategory: {
    fontSize: 11,
    fontWeight: "800",
    color: "#8A94A6",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },

  detailsTitle: {
    fontSize: 30,
    fontWeight: "800",
    color: "#172033",
    marginBottom: 8,
  },

  detailsBrand: {
    fontSize: 14,
    color: "#697386",
    marginBottom: 15,
  },

  detailsRatingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  detailsRating: {
    fontSize: 14,
    fontWeight: "700",
    color: "#172033",
  },

  detailsReviews: {
    fontSize: 13,
    color: "#8A94A6",
    marginLeft: 8,
  },

  detailsPrice: {
    fontSize: 28,
    fontWeight: "800",
    color: "#172033",
    marginBottom: 18,
  },

  stockBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 15,
    marginBottom: 25,

    borderWidth: 1,
    borderColor: "#E9ECF1",
  },

  stockLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#8A94A6",
    textTransform: "uppercase",
    marginBottom: 5,
  },

  stockValue: {
    fontSize: 14,
    fontWeight: "700",
    color: "#172033",
  },

  descriptionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#172033",
    marginBottom: 10,
  },

  detailsDescription: {
    fontSize: 15,
    color: "#697386",
    lineHeight: 25,
    marginBottom: 25,
  },

  // ==========================================
  // BUTTONS
  // ==========================================

  cartButton: {
    backgroundColor: "#172033",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  cartButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  backButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#D9DEE7",
    marginBottom: 25,
  },

  backButtonText: {
    color: "#172033",
    fontSize: 15,
    fontWeight: "700",
  },
});

export default styles;