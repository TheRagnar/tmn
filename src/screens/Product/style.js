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
  price: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 15,
  },
  numbers: {
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 15,
  },
  slider: {
    borderTopColor: "#E31E24",
    borderTopWidth: 8,
    marginTop: 20,
  },
  slide: {
    paddingTop: 30,
    backgroundColor: "#fff",
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  slideText: {
    fontSize: 17,
    lineHeight: 24,
    color: "#8A8A8F"
  },
  sliderControl: {
    flexDirection: "row"
  },
  sliderControlItem: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 38
  },
  sliderControlText: {
    color: "#222",
    fontSize: 17,
    textAlign: "center"
  },
  sliderControlTextActive: {
    color: "#E31E24"
  },
  slideRow: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 44,
  },
  slideRowLeft: {
    width: "48%",
    fontSize: 15,
    color: "#a6a6ab"
  },
  slideRowRight: {
    width: "48%",
    textAlign: "right",
    fontSize: 15,
    color: "#000"
  }
});

export default style;
