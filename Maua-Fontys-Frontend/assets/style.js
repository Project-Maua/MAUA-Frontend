import {StyleSheet} from 'react-native'

export const customStyles = StyleSheet.create({
  // Container
    container: {
      flex: 1,
      flexDirection: 'column',
      textAlign: 'center',
    },
  //Header
    header: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 800,
        borderTopWidth: 120,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#095DAC',
    },
  //Body 
    body: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },
  //Collumn  
    logo: {
      width: 220, 
      height: 100,
      margin: 30, 
    },
    column: {
      flex: 1,
      margin: 5,
      justifyContent: 'center',
      textAlign: 'left',
      alignItems: 'center',
    },   
    columntext:{
      flex: 1,
      justifyContent: 'left',
      textAlign: 'left',
      alignItems: 'left',
      marginRight: 100,
      marginTop: 15,
    },
    Title:{
      fontSize: 30,
      color: '#095DAC',
      fontWeight: 'bold',
      textAlign: 'left', 
    },
    smalltext:{
      fontSize: 14,
      textAlign: 'left', 
    },
    //Input
    icon: {
      marginRight: 10,
    },
    input: {
      width: '80%',
      flex: 1,
      paddingLeft: 10,
    },
    underscore: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: '#095DAC',
      paddingVertical: 10,
      width: '80%',
    },
    containeritem:{
      flex: 1,
      flexDirection: 'row',
    },
    //Button
    button: {
      backgroundColor: '#095DAC',
      color: '#095DAC',
      height: 40,
      width: 100,
      borderRadius: 20,
      marginTop: 20,
    },
    buttonText:{
      color: 'white',
      textAlign: 'center',
      marginTop: 'auto',
      marginBottom: 'auto',
      fontSize: 16,
    },
    //Checkbox
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 20,
    },
    checkbox: {
      width: 20,
      height: 20,
      borderColor: 'gray',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 5,
      borderRadius: 5,
    },
    checkboxText: {
      fontSize: 16,
    },
    //Forgot Password
    forgotPassword: {
      marginLeft: 70,
    },
    //Footer
    
    // footer: {
    //     backgroundColor: 'transparant',
    //     borderStyle: 'solid',
    //     borderRightWidth: 800,
    //     borderBottomWidth: 60,
    //     borderLeftColor: 'transparent',
    //     borderRightColor: 'transparent',
    //     borderBottomColor: '#095DAC',
    // },
  });