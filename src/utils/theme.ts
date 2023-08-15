import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    padding: 8,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    paddingHorizontal: 20,
    marginVertical: 8,
  },
  headlineText: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 8,
  },
  activityIndicator: {
    marginVertical: 8,
    display: 'none',
  },
  listHeaderFooter: {
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  divider: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default style;
