import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => { 
  
  const handleCampusMap  = () => navigation.navigate('CampusMaps')
  const handleGoogleMaps = () => navigation.navigate('GoogleMaps')
  const handleAgenda     = () => navigation.navigate('Agenda'    )
  const handleActivity   = () => navigation.navigate('Activity'  )
  const handleSettings   = () => navigation.navigate('Settings'  )

    return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <Button title="Menu" />
            <Button title="MauaLogo" />
            <Button title="NotificationsBell" />
            <Button onPress={handleSettings} title="Settings" />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="About University" />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Schedule" />
            <Button onPress={handleAgenda} title="Agenda" />
        </View>
        <View style={styles.buttonContainer}>
            <Button onPress={handleGoogleMaps} title="How to get to University" />
            <Button onPress={handleCampusMap} title="Campus Map" />
        </View>
        <Text>Agenda</Text>
        <View style={styles.buttonContainer}>
            <Button onPress={handleActivity} title="Activities" />
            <Button title="Next Activities" />
        </View>
        <Text>Activities</Text>
        <View style={styles.buttonContainer}>
            <Button title="ActivitySample1" />
            <Button title="ActivitySample2" />
        </View>
    </View>

    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      padding: 5,
      justifyContent: 'space-evenly'
    },
    buttonContainer: {
        display: 'flex',
        padding: 'auto',
        flexDirection: 'row'
    },
//     title: {
//       fontSize: 24,
//       marginBottom: 20,
//     },
//     input: {
//       width: '100%',
//       height: 40,
//       borderColor: 'gray',
//       borderWidth: 1,
//       marginBottom: 20,
//       paddingHorizontal: 10,
//     },
//     checkboxContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginBottom: 20,
//     },
//     checkbox: {
//       width: 20,
//       height: 20,
//       borderColor: 'gray',
//       borderWidth: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginRight: 5
//     },
//     checkboxText: {
//       fontSize: 16,
//     },
//     forgotPassword: {
//       color: 'blue',
//       marginLeft: 10
//     },
  });

export default HomePage;
