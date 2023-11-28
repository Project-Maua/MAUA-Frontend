import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {customStyles} from '../assets/style'
import SocialmediaButton from '../components/SocialmediaButton';

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
  
    const handleSignIn = () => {
      //Navigation test:
      navigation.navigate('Home')

      // Implement your login logic here
      // Typically, you would make an API call to authenticate the user
    };
  
    const handleForgotPassword = () => {
      // Implement your forgot password logic here
      // This can navigate to a password reset screen or send a password reset email
    };
  
    return (
      <View style={customStyles.container}>
        {/* Header */}
      <View style={customStyles.header}>
      </View>
        {/* Body */}
        <View style={customStyles.body}>
          {/* Column */}
          <View style={customStyles.column}>
            <Image
              source={require('../assets/logo-maua.png')} 
              style={customStyles.logo}
            />
          <View style={customStyles.columntext}>
            <Text style={customStyles.Title}>Welcome back</Text>
            <Text style={customStyles.smalltext}>Please sign in</Text>
          </View>      
            <View style={customStyles.underscore}>
              <Icon name="envelope" size={20} color="#095DAC" style={customStyles.icon} /> 
              <TextInput
                style={customStyles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Email@maua.br"
              /> 
            </View>
            <View style={customStyles.underscore}>
              <Icon name="lock" size={30} color="#095DAC" style={customStyles.icon} />
              <TextInput
                style={customStyles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>  
            <View style={customStyles.checkboxContainer}>
              <TouchableOpacity
                  onPress={() => setRememberMe(!rememberMe)}
                  style={customStyles.checkbox}>
                  {rememberMe ? (
                  <Text style={customStyles.checkboxText}>x</Text>
                  ) : null}
              </TouchableOpacity>
            <Text>Remember me</Text>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={customStyles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
            </View>
            <View style={customStyles.containeritem}>            
              <TouchableOpacity onPress={handleSignIn}
                style={customStyles.button}
              >
                <Text style={customStyles.buttonText}>Sign in</Text>
              </TouchableOpacity>              
            </View>
            <View style={customStyles.containeritem}>
              <SocialmediaButton  icon='facebook'/>
              <SocialmediaButton  icon='whatsapp'/>
              <SocialmediaButton  icon='instagram'/>
            </View>
          </View>
          <View style={customStyles.footer}>
          </View>
        </View>
      </View>
    );
  };

export default LoginPage;

