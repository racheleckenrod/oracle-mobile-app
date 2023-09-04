import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  hiddenTextContainer: {
    marginBottom: 20,
  },
  hiddenText: {
    fontSize: 16,
    marginBottom: 10,
  },
  hiddenTextButton: {
    color: 'blue',
  },
  dropdown: {
    marginBottom: 20,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 4,
    position: 'absolute',
    width: 200, // Set your desired width
    zIndex: 1,
  },
  dropdownButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
  dropdownButtonContainer: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
  dropdownItems: {
    marginTop: 5,
  },
  dropdownItem: {
    paddingVertical: 5,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  reading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  astraImage: {
    width: 200,
    height: 300,
    borderRadius: 5,
  },
//   image: {
//     width:'100%',
//     // height: undefined,
//     marginHorizontal: 10,
//     borderRadius: 5,
//   },
  imageContainer: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  image: {
    flex: 1,
    width: '100%',
    height: undefined,
    borderRadius: 5,
  },
  textContainer: {
    marginLeft: 20,
  },
  meaning: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  randomButtonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  randomButton: {
    backgroundColor: 'darkgray',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 40,
    borderRadius: 5,
  },
  randomButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  dropdownButtonContainer: {
    alignItems: 'center',
  },
  dropdownButton: {
    backgroundColor: 'darkgray',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 40,
    borderRadius: 5,
    marginBottom: 20,
  },
  dropdownButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalScroll: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    flex: 1,
    marginTop: 100, // Adjust this value to control the modal's position
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },
  resetButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: 'darkgray', // Change to your desired color
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 40,
    borderRadius: 5,
  },
  resetButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  // ... Your existing styles ...
});

export default styles;
