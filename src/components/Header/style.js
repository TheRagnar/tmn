import { StyleSheet } from 'react-native';

import { STYLE_CONST } from '../../const';

const style = StyleSheet.create({
  paddingLeft: {
    paddingLeft: 20,
  },
  paddingRight: {
    paddingRight: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  iconBox: {
    position: "relative",
    zIndex: 2,
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
  iconCount: {
    position: "absolute",
    height: 16,
    paddingLeft: 5,
    paddingRight: 5,
    top: -2,
    right: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#E31E24"
  },
  text: {
    fontSize: 10,
    color: "#fff"
  },
  logoBig: {
    width: 200,
    height: 30
  },
  backIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    marginLeft: 7,
    fontSize: 18,
    color: "#E31E24",
    fontSize: 18
  },
  logo2: {
    width: 35,
    height: 36
  },
  center: {
    flexDirection: "row",
    justifyContent: "center"
  },
  title: {
    textAlign: "center",
    fontSize: 17,
    color: "#000",
    fontWeight: "bold"
  }
});

export default style;

