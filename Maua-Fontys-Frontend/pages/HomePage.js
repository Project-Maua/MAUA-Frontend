import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import {customStyles} from '../assets/style';
  const title = "Welcome!";
  const message = "This is a sample card box in React Native.";
  const cardImage = require('../assets/schoolmaua.jpg');
  const headerImage = require('../assets/schoolmaua.jpg');
const HomePage = ({ navigation }) => {

  const handleAgenda = () => {
    navigation.navigate('Agenda')

    // Implement your login logic here
    // Typically, you would make an API call to authenticate the user
  };
  const handleActivity = () => {
    navigation.navigate('Activity')

    // Implement your login logic here
    // Typically, you would make an API call to authenticate the user
  };
  const handleCampusMaps = () => {
    navigation.navigate('CampusMaps')

    // Implement your login logic here
    // Typically, you would make an API call to authenticate the user
  };
  const handleGoogleMaps = () => {
    navigation.navigate('GoogleMaps')

    // Implement your login logic here
    // Typically, you would make an API call to authenticate the user
  };
  const handleInformations = () => {
    navigation.navigate('About')

    // Implement your login logic here
    // Typically, you would make an API call to authenticate the user
  };
  const handleStudentOrginisation = () => {
    navigation.navigate('StudentOrginisation')

    // Implement your login logic here
    // Typically, you would make an API call to authenticate the user
  };
  const handleNotification = () => {
    navigation.navigate('Notification')

    // Implement your login logic here
    // Typically, you would make an API call to authenticate the user
  };
  const handleSettings = () => {
    navigation.navigate('Settings')

    // Implement your login logic here
    // Typically, you would make an API call to authenticate the user
  };

  return (
    <SafeAreaView>
    <ScrollView>
    <View>
      <View>
        <View style={customStyles.menu}>
              <TouchableOpacity style={customStyles.menu_icon} onPress={handleSettings}>
                  <Icon name="bars" size={25} color="#095DAC"/>
              </TouchableOpacity>
              <Image
                      source={require('../assets/logo-maua.png')} 
                      style={customStyles.menu_logo}
                  />
              <TouchableOpacity style={customStyles.menu_icon} onPress={handleNotification}>
                  <Icon name="bell" size={25} color="#095DAC" />
              </TouchableOpacity>
        </View>
        <View style={customStyles.header_container}>
          <Image source={headerImage} style={customStyles.header_image} />
          <View style={customStyles.overlay_gray}>
            <Text style={customStyles.header_text}>University of Technology Maua</Text>
          </View>
        </View>
        <View style={customStyles.grid_container}>
            <TouchableOpacity style={customStyles.grid_button} onPress={handleAgenda} >
              <Image source={cardImage} style={customStyles.grid_button_image}></Image>
              <View style={customStyles.overlay_gray}>
                <Icon name="calendar" size={25} color="white" style={customStyles.grid_button_icon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={customStyles.grid_button} onPress={handleCampusMaps}>
              <Image source={cardImage} style={customStyles.grid_button_image}></Image>
              <View style={customStyles.overlay_gray}>
                <Icon name="graduation-cap" size={25} color="white" style={customStyles.grid_button_icon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={customStyles.grid_button} onPress={handleGoogleMaps}>
              <Image source={cardImage} style={customStyles.grid_button_image}></Image>
              <View style={customStyles.overlay_gray}>
                <Icon name="compass" size={25} color="white" style={customStyles.grid_button_icon} />
              </View>
            </TouchableOpacity>
        </View>
        <View style={customStyles.grid_container}>
        <TouchableOpacity style={customStyles.grid_button} onPress={handleActivity}>
              <Image source={cardImage} style={customStyles.grid_button_image}></Image>
              <View style={customStyles.overlay_gray}>
                <Icon name="play" size={25} color="white" style={customStyles.grid_button_icon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={customStyles.grid_button} onPress={handleStudentOrginisation}>
              <Image source={cardImage} style={customStyles.grid_button_image}></Image>
              <View style={customStyles.overlay_gray}>
                <Icon name="users" size={25} color="white" style={customStyles.grid_button_icon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={customStyles.grid_button} onPress={handleInformations}>
              <Image source={cardImage} style={customStyles.grid_button_image}></Image>
              <View style={customStyles.overlay_gray}>
                <Icon name="info-circle" type="font-awesome" size={25} color="white" style={customStyles.grid_button_icon} />
              </View>
            </TouchableOpacity>
        </View>
          <Text style={customStyles.body_text}>Agenda</Text>
          <View style={customStyles.message_container}>
            <Text style={customStyles.message_container_title}>6th of Februari | Tuesday </Text>
            <Text style={customStyles.message_container_text}>Location Maua Building A</Text>
          </View>
        <Text style={customStyles.body_text}>Maua activities</Text>
        <View style={customStyles.row}>
            <View style={customStyles.card}>
              <Image source={cardImage} style={customStyles.card_image} />
              <View style={customStyles.card_content}>
                <Text style={customStyles.card_title}>{title}</Text>
                <Text style={customStyles.card_message}>{message}</Text>
                <View style={customStyles.containeritem}>            
                  <TouchableOpacity onPress={""}
                    style={customStyles.button}
                  >
                    <Text style={customStyles.button_text}>More info</Text>
                  </TouchableOpacity> 
                </View>
              </View>
            </View>
            <View style={customStyles.card}>
              <Image source={cardImage} style={customStyles.card_image} />
              <View style={customStyles.card_content}>
                <Text style={customStyles.card_title}>{title}</Text>
                <Text style={customStyles.card_message}>{message}</Text>
                <View style={customStyles.containeritem}>            
                  <TouchableOpacity onPress={""}
                    style={customStyles.button}
                  >
                    <Text style={customStyles.button_text}>More info</Text>
                  </TouchableOpacity> 
                </View>
              </View>
            </View>
          </View>
        </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

