import { StyleSheet } from 'react-native';

import { STYLE_CONST } from '../../const';

const style = StyleSheet.create({
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
  },
  wrapper: {
    borderRadius: 15,
    overflow: "hidden",
    position: "relative",
    zIndex: 1,
    height: 110,
    width: '100%',
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 5,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: 6,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#fff"
  }
});

export default style;

