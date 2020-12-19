import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const style = StyleSheet.create({
  header: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  clear: {
    height: 120,
  },
  inner: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerButton: {
    width: "48%"
  },
  buttonBtn: {
    height: 55
  },
  buttonBtnText: {
    fontSize: 20,
    fontWeight: "normal",
    paddingBottom: 3,
  },
  lists: {
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
  }
});

export default style;
