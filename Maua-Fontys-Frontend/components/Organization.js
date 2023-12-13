import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {customStyles} from '../assets/style'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

const Organization = ({organization}) => {
  const {t, i18n} = useTranslation()
  const navigation = useNavigation();

    const handleMoreInfo = () => {
      navigation.navigate("organizationInfoPage", {info: organization})
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
                    <Text style={customStyles.button_text}>{t('More info')}</Text>
                  </TouchableOpacity> 
              </View>
        </View>
    </View>
      
    )
  }

export default Organization