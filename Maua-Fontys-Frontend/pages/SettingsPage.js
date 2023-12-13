import { View } from 'react-native'
import SettingButton from '../components/SettingButton'
import '../utils/i18n'
import { useTranslation } from 'react-i18next'

const SettingsPage = () => {
  const {t, i18n} = useTranslation()

  const changeLanguage = () => {
    const newLanguage = (i18n.language === 'en') ? 'pt':'en'

    i18n.changeLanguage(newLanguage)
    .then( ()=> {
      console.log("Language changed to " + t(i18n.language))
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <View>
      <SettingButton onPress={changeLanguage} text={t('Language')} icon='globe' />
      <SettingButton text={t('Switch mode')} icon='arrow-switch' />
      <SettingButton text={t('About')} icon='info' />
      <SettingButton text={t('Logout')} icon='sign-out' />
    </View>    
  )
}

export default SettingsPage