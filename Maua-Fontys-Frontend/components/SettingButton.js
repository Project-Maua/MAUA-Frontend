import Icon from 'react-native-vector-icons/Octicons';
import {StyleSheet, Text, TouchableOpacity } from 'react-native';

const SettingButton = ({icon, text}) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
            <Icon name={icon} style={styles.icon} />
        </TouchableOpacity>
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

export default SettingButton