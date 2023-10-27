import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    padding: 8,
  },
  textInput: {
    height: 40,
    borderWidth: 0.6,
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
  listHeaderFooter: {
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  divider: {
    height: 1,
    backgroundColor: 'lightgrey',
    margin: 8,
  },
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  center: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalUnderlay: {
    flex: 1,
    flexDirection: 'column-reverse',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalBody: {
    backgroundColor: 'white',
    padding: 16,
    paddingBottom: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  modalTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitleText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 22,
  },
  modalCloseIcon: {
    position: 'absolute',
    right: 0,
  },
  modalContent: {
    marginBottom: 16,
  },
  pb16: {paddingBottom: 16},
  mv8: {marginVertical: 8},
  colorWhite: {color: 'white'},
});

export default style;
