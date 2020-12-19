import { StyleSheet } from 'react-native';

import { STYLE_CONST } from '../../const';

const style = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
  imageWrapper: {
    width: 120,
    height: 150,
    position: 'relative',
    borderRadius: 5,
    overflow: "hidden"
  },
  imageInfo: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    padding: 20,
    zIndex: 4,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  discount: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 20,
    backgroundColor: "#E31E24",
  },
  discountText: {
    fontSize: 15,
    color: "#fff",
    textTransform: "uppercase",
  },
  image: {
    width: 120,
    height: 150
  },
  content: {
    flex: 1,
    marginLeft: 15,
    borderBottomColor: "#c8c7cc",
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  name: {
    marginTop: 5,
    marginBottom: 6,
    fontSize: 15,
    color: '#000'
  },
  description: {
    marginTop: 5,
    marginBottom: 6,
    fontSize: 15,
    color: '#000'
  },
  price: {
    fontSize: 25,
    color: "#222",
    fontWeight: "bold"
  },
  numbers: {
    marginTop: 10,
    marginBottom: 10
  }
});

export default style;

