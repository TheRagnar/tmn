import { StyleSheet } from 'react-native';
import STYLE_CONST from './styleConst';

const BaseStyle = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex: 1,
  },
  app: {
    backgroundColor: '#fff',
    flex: 1,
  },
  tabText: {
    fontSize: 12,
    color: "#a6a6ab"
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  },
  centerAbs: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  input: {
    height: 44,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#f2f2f4',
    borderRadius: 8,
    fontSize: 17
  },
  button: {
    width: '100%',
    height: 46,
    backgroundColor: '#E31E24',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default BaseStyle;