import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

const SettingButton = ({icon, text}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
      <Icon name={icon} style={styles.icon} />
    </TouchableOpacity>
  )
}

export default function SettingsPage() {
  return (
    <View style={styles.container}>
      <SettingButton text='Language' icon='globe' />
      <SettingButton text='Switch mode' icon='arrow-switch' />
      <SettingButton text='About' icon='info' />
      <SettingButton text='Logout' icon='sign-out' />
    </View>    
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#095DAC',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    display:'flex'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    right: '5%',
    color: "white",
    fontSize: 25
  }
});