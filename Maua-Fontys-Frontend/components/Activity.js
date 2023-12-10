import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {customStyles} from '../assets/style'
import { useNavigation } from '@react-navigation/native'

const Activity = ({activity}) => {
  const navigation = useNavigation();

  const handleMoreInfo = () => {
    navigation.navigate("activityInfo", {info: activity})
  }

  return (
  <View style={""}>
    <Image source={{uri: activity.image}} style={customStyles.card_image} />
      <View style={customStyles.card_content}>
          <Text style={customStyles.card_title}>{activity.name}</Text>
          <Text style={customStyles.card_message}>{activity.startTime.substring(0, 16)}</Text>
          <Text style={customStyles.card_message}>{activity.description.substr(0, 30) + '...'}</Text>
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

export default Activity
