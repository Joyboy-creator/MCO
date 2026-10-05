import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F9", // Crisp light modern supermarket background
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 90, // Prevents content from hiding behind bottom nav
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
  },

  smallText: {
    fontSize: 11,
    letterSpacing: 1.6,
    color: "#0066FF", // Supermarket Blue accent
    fontWeight: "700",
    textTransform: "uppercase",
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#111827",
    marginTop: 2,
  },

  cartButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },

  cartIcon: {
    fontSize: 20,
  },

  searchContainer: {
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },

  searchIcon: {
    fontSize: 22,
    color: "#9CA3AF",
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#1F2937",
  },

  filterButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#0066FF", // Brand blue action button
    justifyContent: "center",
    alignItems: "center",
  },

  filterIcon: {
    color: "#FFFFFF",
    fontSize: 18,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 13,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  seeAll: {
    fontSize: 12,
    color: "#0066FF",
    fontWeight: "600",
  },

  categoryScroll: {
    marginBottom: 25,
  },

  categoryButton: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  activeCategory: {
    backgroundColor: "#0066FF",
    borderColor: "#0066FF",
  },

  categoryText: {
    fontSize: 12,
    color: "#4B5563",
    fontWeight: "600",
  },

  activeCategoryText: {
    color: "#FFFFFF",
  },

  productScroll: {
    marginBottom: 25,
  },

  productCard: {
    width: 165,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 10,
    marginRight: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },

  featuredCard: {
    width: 190,
  },

  productImage: {
    height: 135,
    backgroundColor: "#F3F4F6",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  productEmoji: {
    fontSize: 55,
  },

  favoriteButton: {
    position: "absolute",
    right: 8,
    top: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  favoriteIcon: {
    fontSize: 16,
    color: "#EF4444", // Soft red for wishlist heart
  },

  productInfo: {
    padding: 5,
    paddingTop: 9,
  },

  productCategory: {
    fontSize: 10,
    color: "#9CA3AF",
    marginBottom: 3,
    textTransform: "uppercase",
    fontWeight: "600",
  },

  productName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 8,
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  productPrice: {
    fontSize: 15,
    fontWeight: "800",
    color: "#00A859", // Fresh green for pricing
  },

  addButton: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: "#0066FF",
    justifyContent: "center",
    alignItems: "center",
  },

  addIcon: {
    color: "#FFFFFF",
    fontSize: 18,
    lineHeight: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 65,
  },

  navIcon: {
    fontSize: 21,
    color: "#9CA3AF",
    marginBottom: 3,
  },

  navText: {
    fontSize: 10,
    color: "#9CA3AF",
    fontWeight: "600",
  },

  activeNavCircle: {
    width: 36,
    height: 30,
    borderRadius: 12,
    backgroundColor: "#0066FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 3,
  },

  activeNavIcon: {
    fontSize: 16,
  },

  activeNavText: {
    fontSize: 10,
    color: "#0066FF",
    fontWeight: "700",
  },
});

export default styles;