import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const style = StyleSheet.create({
  shops: {
    marginTop: 10,
    paddingBottom: 30,
    borderTopWidth: 1,
    borderTopColor: 'rgb(200, 199, 204)',
  },
  shop: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(200, 199, 204)'
  }
});

export default style;
