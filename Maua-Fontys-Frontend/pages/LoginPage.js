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
      navigation.navigate('Home')

      // Implement your login logic here
      // Typically, you would make an API call to authenticate the user
    };
  
    const handleForgotPassword = () => {
      // Implement your forgot password logic here
      // This can navigate to a password reset screen or send a password reset email
    };
  
    return (
      <View style={customStyles.container_center}>
        <View style={customStyles.header_login}>
        </View>
        <View style={customStyles.body}>
          <View style={customStyles.column_login}>
            <Image
              source={require('../assets/logo-maua.png')} 
              style={customStyles.logo_login}
            />
          <View style={customStyles.columntext_login}>
            <Text style={customStyles.title_login}>Welcome back</Text>
            <Text style={customStyles.smalltext_login}>Please sign in</Text>
          </View>      
            <View style={customStyles.underscore_login}>
              <Icon name="envelope" size={20} color="#095DAC" style={customStyles.icon_login} /> 
              <TextInput
                style={customStyles.input_login}
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Email@maua.br"
              /> 
            </View>
            <View style={customStyles.underscore_login}>
              <Icon name="lock" size={30} color="#095DAC" style={customStyles.icon_login} />
              <TextInput
                style={customStyles.input_login}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>  
            <View style={customStyles.checkboxContainer_login}>
              <TouchableOpacity
                  onPress={() => setRememberMe(!rememberMe)}
                  style={customStyles.checkbox_login}>
                  {rememberMe ? (
                  <Text style={customStyles.checkboxText_login}>x</Text>
                  ) : null}
              </TouchableOpacity>
            <Text>Remember me</Text>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={customStyles.forgotPassword_login}>Forgot password?</Text>
            </TouchableOpacity>
            </View>
            <View style={customStyles.row}>            
              <TouchableOpacity onPress={handleSignIn}
                style={customStyles.button}
              >
                <Text style={customStyles.button_text}>Sign in</Text>
              </TouchableOpacity>              
            </View>
            <View style={customStyles.row}>
              <SocialmediaButton  icon='facebook'/>
              <SocialmediaButton  icon='whatsapp'/>
              <SocialmediaButton  icon='instagram'/>
            </View>
          </View>
        </View>
      </View>
    );
  };

export default LoginPage;

