import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import Style from '../'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
  
    const handleLogin = () => {
      // Implement your login logic here
      // Typically, you would make an API call to authenticate the user
    };
  
    const handleForgotPassword = () => {
      // Implement your forgot password logic here
      // This can navigate to a password reset screen or send a password reset email
    };
  
    return (
      <View style={styles.container}>
        {/* Header */}
      <View style={styles.header}>
      </View>
        {/* Body with Columns */}
        <View style={styles.body}>
          {/* Column 1 */}
          <View style={styles.column}>
            <Image
              source={require('../assets/logo-maua.png')} 
              style={styles.logo}
            />
          <Text style={styles.Title}>Welcome to PRINT</Text>
            <Text style={styles.Title}>Welcome back</Text>
            <Text style={styles.smalltext}>Please sign in</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email@maua.br"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                  onPress={() => setRememberMe(!rememberMe)}
                  style={styles.checkbox}>
                  {rememberMe ? (
                  <Text style={styles.checkboxText}>x</Text>
                  ) : null}
              </TouchableOpacity>
            <Text>Remember me</Text>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
            </View>
              <Button title="Login" onPress={handleLogin} />
          </View>
        </View>
      



        {/* <TextInput
          style={styles.input}
          placeholder="Email@maua.br"
          value={email}
          onChangeText={setEmail}
        /> */}
        {/* <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        /> */}
        {/* <View style={styles.checkboxContainer}>
          <TouchableOpacity
            onPress={() => setRememberMe(!rememberMe)}
            style={styles.checkbox}>
            {rememberMe ? (
              <Text style={styles.checkboxText}>x</Text>
            ) : null}
          </TouchableOpacity>
          <Text>Remember me</Text>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <Button title="Login" onPress={handleLogin} /> */}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    // New:
    container: {
      flex: 1,
      flexDirection: 'column',
      width: 400,
      textAlign: 'center',
    },
    header: {
      // height: 80,
      // backgroundColor: 'blue',
      // justifyContent: 'center',
      // alignItems: 'center',
      // width: 400,
      // marginTop: 20,
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
    headerText: {
      color: 'white',
      fontSize: 18,
    },
    logo: {
      width: 220, 
      height: 100,
      margin: 30, 
    },
    body: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },
    column: {
      flex: 1,
      margin: 5,
      justifyContent: 'center',
      textAlign: 'left',
      alignItems: 'center',
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 10,
      padding: 5,
    },
    footer: {
      height: 50,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
    },
    footerText: {
      color: 'white',
      fontSize: 18,
    },
    Title:{
      fontSize: 20,
      color: '#095DAC',
      fontWeight: 'bold',
      textAlign: 'left', 
    },
    smalltext:{
      fontSize: 10,
      textAlign: 'left', 
    }
    // Old:
    // container: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   padding: 20,
    // },
    // title: {
    //   fontSize: 24,
    //   marginBottom: 20,
    // },
    // input: {
    //   width: '100%',
    //   height: 40,
    //   borderColor: 'gray',
    //   borderWidth: 1,
    //   marginBottom: 20,
    //   paddingHorizontal: 10,
    // },
    // checkboxContainer: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   marginBottom: 20,
    // },
    // checkbox: {
    //   width: 20,
    //   height: 20,
    //   borderColor: 'gray',
    //   borderWidth: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   marginRight: 5
    // },
    // checkboxText: {
    //   fontSize: 16,
    // },
    // forgotPassword: {
    //   color: 'blue',
    //   marginLeft: 10
    // },
  });

export default Login;

