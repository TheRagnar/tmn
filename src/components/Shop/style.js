import { StyleSheet } from 'react-native';

import { STYLE_CONST } from '../../const';

const style = StyleSheet.create({
  header: {
    paddingLeft: 15,
    paddingRight: 45,
    paddingTop: 8,
    paddingBottom: 9,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  drops: {
    position: "absolute",
    top: "50%",
    marginTop: -12,
    right: 10,
  },
  image: {
    width: 35,
    height: 36,
  },
  imageWrapper: {
    width: 35,
    marginRight: 15,
  },
  name: {
    fontSize: 19,
    color: '#000'
  },
  contet: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  row: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 12,
  },
  box: {
    width: '50%',
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    width: 20,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  timeText: {
    color: '#8A8A8F',
    fontSize: 17,
    fontWeight: "bold"
  },
  timeTimeText: {
    color: '#E31E24',
    fontSize: 17,
    fontWeight: "bold"
  }
});

export default style;

