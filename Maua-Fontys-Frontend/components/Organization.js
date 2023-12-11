import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {customStyles} from '../assets/style'
import { useNavigation } from '@react-navigation/native'

const Organization = ({organization}) => {
  const navigation = useNavigation();

    const handleMoreInfo = () => {
      navigation.navigate("descriptionInfoPage", {info: organization})
    }

    return (
    <View style={customStyles.activity_card}>
      <Image source={{uri: organization.image}} style={customStyles.card_image} />
        <View style={customStyles.card_content}>
            <Text style={customStyles.card_title}>{organization.name}</Text>
            <Text style={customStyles.card_message}>{organization.description.substr(0, 30) + '...'}</Text>
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

export default Organization