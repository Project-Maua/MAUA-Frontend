import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Notifications = (props) => {
  const [notification] = useState(props.notification)

  return (
    <View style={styles.card}>
    <View style={styles.content}>
        <Text style={styles.title}>{notification.title}</Text>
        <Text style={styles.message}>{notification.description}</Text>
    </View>
</View>

  )
}
const styles = StyleSheet.create({
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

  message: {
      fontSize: 16,
  },
  
})

export default Notifications