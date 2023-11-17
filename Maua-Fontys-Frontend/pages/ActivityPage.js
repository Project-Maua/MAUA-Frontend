import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, Text, Button, StyleSheet } from 'react-native';
import Activity from '../components/Activity.js';

const ActivityPage = () => {

  const activities = [
    {
      'id': 'ac-123453',
      'image': '../mocks/images/tracking.jpg',
      'name': 'Tracking',
      'time': '11:30',
      'date': '13/09/2023',
      'location': 'Block D - room D1',
      'subscribed': 'True/False',
      'description': 'Students will tack ... use time... calculus.'
    },
    {
      'id': 'ac-123454',
      'image': 'IMAGE',
      'name': 'Rocket challenge',
      'time': '11:30',
      'date': '13/09/2023',
      'location': 'Block S - room Field',
      'subscribed': 'True/False',
      'description': 'Students throw ... rockets... with water.'
    },
    {
      'id': 'ac-12354',
      'image': 'IMAGE',
      'name': 'challenge',
      'time': '13:30',
      'date': '14/09/2023',
      'location': 'room Field',
      'subscribed': 'True/False',
      'description': 'Students throw ... rockets... with water.'
    },
    {
      'id': 'ac-1254',
      'image': 'IMAGE',
      'name': 'Bee',
      'time': '16:30',
      'date': '15/09/2023',
      'location': 'Block Q - room Q12',
      'subscribed': 'False',
      'description': 'Students throw ... rockets... with water.'
    }
  ]

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    // Typically, you would make an API call to authenticate the user
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    // This can navigate to a password reset screen or send a password reset email
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.buttonContainer}>
          <Button title="Menu" />
          <Button title="MauaLogo" />
          <Button title="NotificationsBell" />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.container}>

        <Text>University Activities</Text>
        <View style={styles.container}>
          {activities.map((activity, index) => (
            <Activity key={index} activity={activity} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20, // Adjust as needed
  },
  buttonContainer: {
    display: 'flex',
    padding: 'auto',
    flexDirection: 'row',
    padding: 20
  },
  safeArea: {
    flex: 1,
  },
  header: {
    padding: 15,
    alignItems: 'center',
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

export default ActivityPage;
