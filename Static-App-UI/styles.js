import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F5",
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
  },

  smallText: {
    fontSize: 11,
    letterSpacing: 1.5,
    color: "#888",
    fontWeight: "600",
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#1E1E1E",
    marginTop: 2,
  },

  cartButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
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
  },

  searchIcon: {
    fontSize: 28,
    color: "#777",
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#222",
  },

  filterButton: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: "#1E1E1E",
    justifyContent: "center",
    alignItems: "center",
  },

  filterIcon: {
    color: "#FFFFFF",
    fontSize: 20,
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
    color: "#202020",
  },

  seeAll: {
    fontSize: 12,
    color: "#777",
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
  },

  activeCategory: {
    backgroundColor: "#1E1E1E",
  },

  categoryText: {
    fontSize: 12,
    color: "#666",
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
  },

  featuredCard: {
    width: 190,
  },

  productImage: {
    height: 135,
    backgroundColor: "#EFEFEA",
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
  },

  favoriteIcon: {
    fontSize: 19,
    color: "#333",
  },

  productInfo: {
    padding: 5,
    paddingTop: 9,
  },

  productCategory: {
    fontSize: 10,
    color: "#999",
    marginBottom: 3,
  },

  productName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#222",
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
    color: "#1E1E1E",
  },

  addButton: {
    width: 28,
    height: 28,
    borderRadius: 10,
    backgroundColor: "#1E1E1E",
    justifyContent: "center",
    alignItems: "center",
  },

  addIcon: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 22,
  },

  grid: {
    flexDirection: "row",
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
    borderTopColor: "#EEEEEE",
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
    color: "#888",
    marginBottom: 3,
  },

  navText: {
    fontSize: 10,
    color: "#888",
    fontWeight: "600",
  },

  activeNavCircle: {
    width: 36,
    height: 30,
    borderRadius: 12,
    backgroundColor: "#1E1E1E",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 3,
  },

  activeNavIcon: {
    fontSize: 16,
  },

  activeNavText: {
    fontSize: 10,
    color: "#1E1E1E",
    fontWeight: "700",
  },
});

export default styles;