import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import Course from '../components/Course.js'
import {customStyles} from '../assets/style'
import '../utils/i18n'
import { useTranslation } from 'react-i18next'

const cardImage = require('../assets/schoolmaua.jpg')
const AboutPage = () => {
  const {t, i18n} = useTranslation()

  return (
    <ScrollView>
    <View>
      <View style={""}>
        <Text style={customStyles.body_text}>{t("About Maua")}</Text>
        <View style={customStyles.message_container}>
          <Text style={customStyles.message_container_title}>{t("Here you can find more information about the Maua University")}</Text>
          <Text style={customStyles.message_container_text}>{t("Provided by Maua University")}</Text>
        </View>
        <Text style={customStyles.body_text}>{t("Maua staff")}</Text>
        <View style={customStyles.row_two_components}>
            <View style={customStyles.card}>
              <Image source={cardImage} style={customStyles.card_image} />
              <View style={customStyles.card_content}>
                <Text style={customStyles.card_title}>{t("Rector")}</Text>
                <Text style={customStyles.card_message}>...</Text>
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
                <Text style={customStyles.card_title}>{t("Vice rector")}</Text>
                <Text style={customStyles.card_message}>...</Text>
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
        <Text style={customStyles.body_text}>{t("Internal Program")}</Text>
        <View style={customStyles.row_align_center}>
              <View style={""}>
                {about.map((course, index) => (
                  <Course key={index} course={course} />
                ))}
              </View>
        </View>
      </View>
    </View>
  </ScrollView> 

  )
}

export default AboutPage

const about = [
  {
    'id': 'ac-123453',
    'image': '../mocks/images/tracking.jpg',
    'name': 'Tracking',
    'time': '11:30',
    'date': '13/09/2023',
    'location': 'Block D - room D1',
    'subscribed': 'True/False',
    'description': 'Students will tack ... use time... calculus.'
  },
  {
    'id': 'ac-123454',
    'image': 'IMAGE',
    'name': 'Rocket challenge',
    'time': '11:30',
    'date': '13/09/2023',
    'location': 'Block S - room Field',
    'subscribed': 'True/False',
    'description': 'Students throw ... rockets... with water.'
  },
  {
    'id': 'ac-12354',
    'image': 'IMAGE',
    'name': 'challenge',
    'time': '13:30',
    'date': '14/09/2023',
    'location': 'room Field',
    'subscribed': 'True/False',
    'description': 'Students throw ... rockets... with water.'
  },
  {
    'id': 'ac-1254',
    'image': 'IMAGE',
    'name': 'Bee',
    'time': '16:30',
    'date': '15/09/2023',
    'location': 'Block Q - room Q12',
    'subscribed': 'False',
    'description': 'Students throw ... rockets... with water.'
  }
]
