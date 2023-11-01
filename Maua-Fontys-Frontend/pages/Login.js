import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

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
        <Text style={styles.title}>Welcome to PRINT</Text>
        <TextInput
          style={styles.input}
          placeholder="Email@maua.br"
          value={email}
          onChangeText={setEmail}
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
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
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
      color: 'blue',
      marginLeft: 10
    },
  });

export default Login;
