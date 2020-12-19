import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  banners: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  bannersSlider: {
    width: 280,
    height: 280,
    overflow: "visible",
  },
  slide: {
    width: 280,
    height: 280,
    position: "relative",
    zIndex: 2,
    borderRadius: 15,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  slideImage: {
    position: "absolute",
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    borderRadius: 15,
    overflow: "hidden",
  },
  slideContent: {
    justifyContent: "flex-end",
    padding: 20,
    paddingTop: 56,
    position: "relative",
    zIndex: 4,
    flex: 1,
  },
  slideText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
  },
  bannersClear: {
    height: 280,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    paddingTop: 10,
    paddingBottom: 20
  },
  categories: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  category: {
    width: "48%",
    height: 110,
    marginBottom: 15,
  }
});

export default style;
