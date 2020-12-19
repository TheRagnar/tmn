import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const style = StyleSheet.create({
  banners: {
    marginTop: 10,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  }
});

export default style;
