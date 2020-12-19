import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const style = StyleSheet.create({
  clear: {
    height: 120,
  },
  imageWrapper: {
    paddingTop: 10,
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  imageImage: {
    width: width,
    height: 375,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#000000"
  },
  text: {
    fontSize: 19,
    lineHeight: 26,
    color: "#9fa4a9"
  },
  button: {
    marginTop: 35,
  }
});

export default style;
