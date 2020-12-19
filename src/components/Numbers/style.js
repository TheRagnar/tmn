import { StyleSheet } from 'react-native';

import { STYLE_CONST } from '../../const';

const style = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttons: {
    flexDirection: "row"
  },
  button: {
    width: 40,
    height: 30,
    borderWidth: 1,
    borderColor: "#E31E24",
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },
  buttonFirst: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonLast: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  buttonCenter: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  value: {
    color: "#E31E24",
    fontSize: 17
  },
  minus: {
    width: 15,
    height: 2,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -7.5,
    marginTop: -1,
    backgroundColor: "#e31e24"
  },
  plus: {
    height: 15,
    width: 2,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -1,
    marginTop: -7.5,
    backgroundColor: "#e31e24"
  },
  control: {
    marginLeft: 20
  }
});

export default style;

