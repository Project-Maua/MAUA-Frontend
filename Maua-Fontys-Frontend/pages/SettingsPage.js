import {View} from 'react-native';
import SettingButton from '../components/SettingButton'

const SettingsPage = () => {
  return (
    <View>
      <SettingButton text='Language' icon='globe' />
      <SettingButton text='Switch mode' icon='arrow-switch' />
      <SettingButton text='About' icon='info' />
      <SettingButton text='Logout' icon='sign-out' />
    </View>    
  )
}

export default SettingsPage