import { StyleSheet } from 'react-native';

import { STYLE_CONST } from '../../const';

const style = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "flex-start"
  },
  wrapperImage: {
    borderRadius: 5,
    overflow: "hidden"
  },
  image: {
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    flexGrow: 1,
    marginLeft: 15,
    paddingTop: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#c8c7cc",
    minHeight: "100%"
  },
  action: {
    color: "#a6a6ab",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "uppercase"
  },
  text: {
    fontSize: 15,
    color: "#000",
    lineHeight: 23,
  },
  date: {
    color: "#a6a6ab",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase"
  }
});

export default style;

