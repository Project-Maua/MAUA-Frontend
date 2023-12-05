import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Notifications = (props) => {
  const [notification] = useState(props.notification);
  const handleButtonPress = () => {
    console.log('Button pressed');
  };

  return (
    <View style={styles.card}>
    <View style={styles.content}>
        <Text style={styles.title}>{notification.title}</Text>
        <Text style={styles.message}>{notification.description}</Text>
        <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
            <Text style={styles.buttonText}>More info</Text>
        </TouchableOpacity>
    </View>
</View>

  );
}
const styles = StyleSheet.create({
  text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
  },
  card: {
      backgroundColor: 'lightgrey',
      borderRadius: 10,
      margin: 5,
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
  },
  content: {
      padding: 10,
  },
  title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
  },
  textbetween: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      marginLeft: 15,
  },
  message: {
      fontSize: 16,
  },
  //Button
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
      textAlign: 'center',
      marginTop: 'auto',
      marginBottom: 'auto',
      fontSize: 16,
  },
});

export default Notifications;