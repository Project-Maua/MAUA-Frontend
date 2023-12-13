import React from 'react'
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome' 
import {customStyles} from '../assets/style'
import '../utils/i18n'
import { useTranslation } from 'react-i18next'
import Constants from '../utils/Constants'
import CardBox from '../components/CardBox'
import ActivityDayFilter from '../components/ActivityDayFilter'

  const title = "Welcome!"
  const message = "This is a sample card box in React Native."
  const cardImage = require('../assets/schoolmaua.jpg')
  const cardImageNotification = require('../assets/Notification.jpg')
  const cardImageMaps = require('../assets/Maps.jpg')
  const cardImageAgenda = require('../assets/Agenda.jpg')
  const cardImageWorkshop = require('../assets/Workshop.jpg')
  const cardImageCampus = require('../assets/Campus.jpg')
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
              <Image source={cardImageAgenda} style={customStyles.grid_button_image}></Image>
              <View style={customStyles.overlay_gray}>
                <Icon name="calendar" size={25} color="white" style={customStyles.grid_button_icon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={customStyles.grid_button} onPress={handleCampusMaps}>
              <Image source={cardImageCampus} style={customStyles.grid_button_image}></Image>
              <View style={customStyles.overlay_gray}>
                <Icon name="graduation-cap" size={25} color="white" style={customStyles.grid_button_icon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={customStyles.grid_button} onPress={handleGoogleMaps}>
              <Image source={cardImageMaps} style={customStyles.grid_button_image}></Image>
              <View style={customStyles.overlay_gray}>
                <Icon name="compass" size={25} color="white" style={customStyles.grid_button_icon} />
              </View>
            </TouchableOpacity>
        </View>
        <View style={customStyles.grid_container}>
        <TouchableOpacity style={customStyles.grid_button} onPress={handleActivity}>
              <Image source={cardImageWorkshop} style={customStyles.grid_button_image}></Image>
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
              <Image source={cardImageNotification} style={customStyles.grid_button_image}></Image>
              <View style={customStyles.overlay_gray}>
                <Icon name="info-circle" type="font-awesome" size={25} color="white" style={customStyles.grid_button_icon} />
              </View>
            </TouchableOpacity>
        </View>
          <Text style={customStyles.body_text}>{t('Your next activity')}</Text>
          <View style={customStyles.message_container}>
            <Text style={customStyles.message_container_title}>{t("6th of February | Tuesday")} </Text>
            <Text style={customStyles.message_container_text}>{t("Location Maua Building A")}</Text>
          </View>
        <Text style={customStyles.body_text}>{t("Your activities today")}</Text>
        <View style={''}>
           <ActivityDayFilter data={Activities} day={11}/>
        </View>
        </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default HomePage

const Activities = [
  {
      'id': 'ac-000001',
      'image': 'https://maua.br/img/upload/campus-scs-1645732308.jpg',
      'name': 'Tracking on Campus',
      'startTime': '2023/09/05 11:30:00.000',
      'endTime': '2023/09/13 13:20:00.000',
      'location': 'Block D - room D1',
      'description': 'Students will tack ... use time... calculus...'
  },
  {
      'id': 'ac-000002',
      'image': 'https://maua.br/img/upload/grupos-de-extensao-imt-1694809070.jpg',
      'name': 'Rocket challenge',
      'startTime': '2023/09/11 13:30:00.000',
      'endTime': '2023/09/14 15:45:00.000',
      'location': 'Block S - room Field',
      'description': 'Students throw ... rockets... with water...'
  },
  {
      'id': 'ac-000003',
      'image': 'https://maua.br/img/upload/banner-controle-automacao-1677511251.jpg',
      'name': 'Coding Workshop',
      'startTime': '2023/09/11 09:00:00.000',
      'endTime': '2023/09/15 12:00:00.000',
      'location': 'Block W - room W402',
      'description': 'Learn the basics of coding using Python and JavaScript.'
  },
  {
      'id': 'ac-000004',
      'image': 'https://maua.br/img/upload/matriculas-e-transferencias-1695241733.jpg',
      'name': 'Socialization Dynamic',
      'startTime': '2023/09/07 14:00:00.000',
      'endTime': '2023/09/16 18:00:00.000',
      'location': 'Block S - Gymnasium',
      'description': 'Explore the creativity of students through various activities.'
  },
  {
      'id': 'ac-000005',
      'image': 'https://maua.br/img/upload/iniciacao-cientifica-1663256113.jpg',
      'name': 'Chemistry Challenge',
      'startTime': '2023/09/08 16:00:00.000',
      'endTime': '2023/09/17 17:30:00.000',
      'location': 'Block R - room R2',
      'description': 'Engage in a friendly competition to promote knowledge and integration.'
  }
]

