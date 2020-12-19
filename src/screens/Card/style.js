import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const style = StyleSheet.create({
  clear: {
    height: 120,
  },
  inner: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  item: {
    paddingTop: 40
  },
  clearText: {
    textAlign: 'center',
    fontSize: 15,
    color: "#a6a6ab",
    paddingTop: 30,
    paddingBottom: 30,
  },
  total: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 20,
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000"
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#E31E24"
  }
});

export default style;
