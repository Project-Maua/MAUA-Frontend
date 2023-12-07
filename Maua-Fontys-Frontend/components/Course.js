import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {customStyles} from '../assets/style'
import { useNavigation } from '@react-navigation/native';

const cardImage = require('../assets/schoolmaua.jpg')
const Course = ({course}) => {
  const navigation = useNavigation();

    const handleMoreInfo = () => {
      navigation.navigate("MoreInfo", {info: course})
    }

    return (
    <View style={""}>
      <Image source={{uri: course.image}} style={customStyles.card_image} />
        <View style={customStyles.card_content}>
            <Text style={customStyles.card_title}>{course.name}</Text>
            <Text style={customStyles.card_message}>{course.description.substr(0, 50)+'...'}</Text>
              <View style={customStyles.containeritem}>            
                  <TouchableOpacity onPress={handleMoreInfo}
                    style={customStyles.button}
                  >
                    <Text style={customStyles.button_text}>More info</Text>
                  </TouchableOpacity> 
              </View>
        </View>
    </View>
      
    )
  }

export default Course
