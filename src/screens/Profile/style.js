import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const style = StyleSheet.create({
  content: {
    paddingTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40
  },
  field: {
    marginBottom: 15,
  },
  wrapper: {
    position: "relative",
    zIndex: 1,
    borderWidth: 5,
    borderColor: "#E31E24",
    borderRadius: 15,
    paddingTop: 110,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 25,
  },
  wrapperSmall: {
    paddingTop: 75
  },
  avatar: {
    width: 160,
    height: 160,
    position: 'absolute',
    top: -60,
    left: "50%",
    marginLeft: -80,
    borderRadius: 80,
    overflow: "hidden",
    zIndex: 3,
    backgroundColor: "#fff",
    borderWidth: 5,
    borderColor: "#E31E24",
    justifyContent: "center",
    alignItems: "center"
  },
  avatarSmall: {
    width: 110,
    height: 110,
    top: -50,
    marginLeft: -55
  },
  avatarImage: {
    zIndex: 3,
    position: "relative",
    width: 154,
    height: 154,
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
  lists: {
    marginTop: 35,
    borderTopColor: "#c8c7cc",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#c8c7cc"
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
    paddingLeft: 15,
  },
  listArrow: {
    position: "absolute",
    right: 10,
    top: 0,
    bottom: 0,
    alignItems: "center",
    flexDirection: "row"
  },
  listIconBox: {
    width: 35,
    height: 35,
    borderRadius: 19,
    backgroundColor: "#ff2d55",
    minWidth: 35,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  listText: {
    color: "#222",
    fontSize: 19,
    height: "100%",
    paddingRight: 70,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#c8c7cc",
    flex: 1,
    paddingTop: 18,
    paddingBottom: 18,
  },
  listTextNoborder: {
    borderBottomColor: "transparent",
    borderBottomWidth: 0
  }
});

export default style;
