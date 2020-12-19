import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const style = StyleSheet.create({
  content: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 30,
  },
  groups: {
    borderTopWidth: 1,
    borderTopColor: "#c8c7cc",
    borderBottomWidth: 1,
    borderBottomColor: "#c8c7cc",
    paddingLeft: 15,
  },
  group: {
    borderBottomWidth: 1,
    borderBottomColor: "#c8c7cc",
    position: "relative",
    paddingRight: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8
  },
  groupText: {
    fontSize: 19,
    color: "#000",
  },
  groupSelect: {
    fontSize: 19,
    color: "#222",
  },
  groupIcon: {
    position: "absolute",
    top: "50%",
    right: 10,
    marginTop: -12,
    zIndex: 3,
  },
  itemIcon: {
    position: "absolute",
    top: "50%",
    right: 10,
    marginTop: -12,
    zIndex: 3,  
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "#c8c7cc",
    position: "relative",
    paddingRight: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
  },
  itemText: {
    fontSize: 19,
    color: "#000",
  },
  contentInner: {
    marginTop: 10,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: "#c8c7cc"
  }
});

export default style;
