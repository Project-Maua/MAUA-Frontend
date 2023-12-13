import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'
import { customStyles } from '../assets/style'

const CardBox = ({ title, message, image }) => {
  const {t, i18n} = useTranslation()

  return (
    <View style={customStyles.card}>
    <Image source={{uri: image}} style={customStyles.card_image} />
    <View style={customStyles.card_content}>
      <Text style={customStyles.card_title}>{t(title)}</Text>
      <Text style={customStyles.card_message}>{t(message)}</Text>
      <View style={customStyles.containeritem}>            
        <TouchableOpacity onPress={""} style={customStyles.button}>
          <Text style={customStyles.button_text}>{ t('More info') } </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  )
}

export default CardBox