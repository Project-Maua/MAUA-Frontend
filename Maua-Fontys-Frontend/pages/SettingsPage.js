import { useState } from 'react'
import { View } from 'react-native'
import SettingButton from '../components/SettingButton'
import '../utils/i18n'
import { useTranslation } from 'react-i18next'

const SettingsPage = () => {

  const [currentLanguage, setCurrentLanguage] = useState('en')

  const {t, i18n} = useTranslation()

  const changeLanguage = (value) => {
    console.log(value)
    if (value === 'en'){
      setCurrentLanguage('pt')
    }
    else{
      setCurrentLanguage('en')
    }
    i18n.changeLanguage(currentLanguage)
    .then( ()=> {
      console.log("Language changed")
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <View>
      <SettingButton onPress={()=>changeLanguage(currentLanguage)} text={t('Language')} icon='globe' />
      <SettingButton text={t('Switch mode')} icon='arrow-switch' />
      <SettingButton text={t('About')} icon='info' />
      <SettingButton text={t('Logout')} icon='sign-out' />
    </View>    
  )
}

export default SettingsPage