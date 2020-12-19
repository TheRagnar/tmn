import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  form: {
    borderRadius: 15,
    borderWidth: 5,
    borderColor: '#E31E24',
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 30,
  }, 
  title: {
    textAlign: 'center',
    marginBottom: 20
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10
  },
  formItem: {
    marginBottom: 15,
  },
  footer: {
    marginTop: 20,
  },
  footerButton: {
    marginBottom: 15,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  footerButtonSmall: {
    maxWidth: 180,
  },
  error: {
    marginTop: 0,
    marginBottom: 0,
  },
  errorText: {
    fontSize: 12,
    color: '#ff0000'
  }
});

export default style;