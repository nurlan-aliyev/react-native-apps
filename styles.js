import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
      marginTop: Constants.statusBarHeight,
      flex: 1,
      backgroundColor: '#ff6347',
      alignContent: 'center'
    },
    biggerText: {
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: "center",
      color: "#FFF",
      marginHorizontal: 2,
      marginBottom: 5
    },
    biggerNumText: {
      fontSize: 26
    },
    oprBtns: {
      alignSelf: 'center',
      justifyContent: 'center',
      marginHorizontal: 10,
      marginTop: 10,
      width: 50,
      height: 50,
      padding: 5,
      backgroundColor: "#0ca70c",
      borderRadius: 3
    },
    oprBtnsText: {
      alignSelf: 'center',
      justifyContent: 'center',
    },
    oprBtnsView: {
      flexDirection: "row",
      justifyContent: 'center',
    },
    mainLabel: {
      fontSize: 40,
      textAlign: 'center',
      marginTop: 70,
      marginBottom: 0,
      paddingBottom: 30,
      color: '#FFF',
      fontWeight: 'bold'
    },
    timerCompContainer: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
    },
    timerCompText: {
      alignSelf: 'center',
      justifyContent: 'center',
      color: "#FFF"
    },
    timerCompBtns: {
      alignSelf: 'center',
      justifyContent: 'center',
      margin: 15,
      width: 60,
      height: 60,
      padding: 8,
      backgroundColor: "#0ca70c",
      borderRadius: 3
    },
    timerMainText: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#FFF',
    },
    sessionBorder: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      borderWidth: 5,
      borderRadius: 50,
      borderColor: 'whitesmoke',
      width: 250,
      height: 200,
      marginBottom: 125
    },
  });

  export default styles