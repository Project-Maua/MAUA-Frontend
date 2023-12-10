import React from 'react'
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome' 
import {customStyles} from '../assets/style'
import '../utils/i18n'
import { useTranslation } from 'react-i18next'
import Constants from '../utils/Constants'

  const title = "Welcome!"
  const message = "This is a sample card box in React Native."
  const cardImage = require('../assets/schoolmaua.jpg')
  const headerImage = require('../assets/schoolmaua.jpg')
const HomePage = ({ navigation }) => {

  const {t, i18n} = useTranslation()

  const handleAgenda = () => {
    navigation.navigate('Agenda')
  }
  const handleActivity = () => {
    navigation.navigate('Activity')
  }
  const handleCampusMaps = () => {
    navigation.navigate('CampusMaps')
  }
  const handleGoogleMaps = () => {
    navigation.navigate('GoogleMaps')
  }
  const handleInformations = () => {
    navigation.navigate('MenuACOPage')
  }
  const handleStudentOrganization = () => {
    navigation.navigate('StudentOrganization')
  }

  return (
    <SafeAreaView>
    <ScrollView>
    <View>
      <View>
        <View style={customStyles.header_container}>
          <Image source={{uri: Constants.mauaImage}} style={customStyles.header_image} />
          <View style={customStyles.overlay_gray}>
            <Text style={customStyles.header_text}>{t("University of Technology Maua")}</Text>
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
            <TouchableOpacity style={customStyles.grid_button} onPress={handleStudentOrganization}>
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
            <Text style={customStyles.message_container_title}>{t("6th of February | Tuesday")} </Text>
            <Text style={customStyles.message_container_text}>{t("Location Maua Building A")}</Text>
          </View>
        <Text style={customStyles.body_text}>{t("Maua activities")}</Text>
        <View style={customStyles.row}>
            <View style={customStyles.card}>
              <Image source={cardImage} style={customStyles.card_image} />
              <View style={customStyles.card_content}>
                <Text style={customStyles.card_title}>{t(title)}</Text>
                <Text style={customStyles.card_message}>{t(message)}</Text>
                <View style={customStyles.containeritem}>            
                  <TouchableOpacity onPress={""}
                    style={customStyles.button}
                  >
                    <Text style={customStyles.button_text}>{t("More info")}</Text>
                  </TouchableOpacity> 
                </View>
              </View>
            </View>
            <View style={customStyles.card}>
              <Image source={cardImage} style={customStyles.card_image} />
              <View style={customStyles.card_content}>
                <Text style={customStyles.card_title}>{t(title)}</Text>
                <Text style={customStyles.card_message}>{t(message)}</Text>
                <View style={customStyles.containeritem}>            
                  <TouchableOpacity onPress={""}
                    style={customStyles.button}
                  >
                    <Text style={customStyles.button_text}>{t("More info")}</Text>
                  </TouchableOpacity> 
                </View>
              </View>
            </View>
          </View>
        </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default HomePage

