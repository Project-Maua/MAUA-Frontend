import {StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonMaua = ({text}) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
    backgroundColor: '#095DAC',
      color: '#095DAC',
      height: 40,
      width: 100,
      borderRadius: 20,
      marginTop: 20,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
});

export default ButtonMaua