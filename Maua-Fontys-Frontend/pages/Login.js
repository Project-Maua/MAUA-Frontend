import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
        {/* Body */}
        <View style={styles.body}>
          {/* Column */}
          <View style={styles.column}>
            <Image
              source={require('../assets/logo-maua.png')} 
              style={styles.logo}
            />
              <Text style={styles.Title}>Welcome back</Text>
              <Text style={styles.smalltext}>Please sign in</Text>
            <View style={styles.try}>
              <Icon name="envelope" size={20} color="#095DAC" style={styles.icon} /> 
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Email@maua.br"
              /> 
            </View>
            <View style={styles.try}>
              <Icon name="lock" size={30} color="#095DAC" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>  
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
            <View style={styles.containeritem}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
              >
                <Text style={styles.buttonText}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.footer}>

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
    try: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: '#095DAC',
      paddingVertical: 10,
      width: '80%',
    },
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
    icon: {
      marginRight: 10,
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
      // height: 40,
      // marginTop: 10,
      // padding: 5,
      // borderBottomWidth: 1,
      // borderBottomColor: '#095DAC',
      flex: 1,
      paddingLeft: 10,
    },
    // footer: {
    //     backgroundColor: 'transparent',
    //     borderStyle: 'solid',
    //     borderRightWidth: 800,
    //     borderBottomWidth: 120,
    //     borderLeftColor: 'transparent',
    //     borderRightColor: 'transparent',
    //     borderBottomColor: '#095DAC',
    // },
    footerText: {
      color: 'white',
      fontSize: 18,
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
      marginRight: 5
    },
    checkboxText: {
      fontSize: 16,
    },
     forgotPassword: {
      marginLeft: 70,
    },
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

