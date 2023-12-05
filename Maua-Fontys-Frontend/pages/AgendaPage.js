import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button, SafeAreaView, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Activity from '../components/Activity';


const AgendaPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
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
    const getActivities = async () => {
      try {
        const response = await fetch('https://reactnative.dev/movies.json',{
          header:{
            "Content-Type":"application/json"
          }
        });
        const json = await response.json();
        setData(json.movies);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      getActivities();
    }, []);
    console.log(data)
    return (
      <SafeAreaView style={styles.safeArea}>
      
      <View style={styles.agendaContainer}>
        {/* Replace the Button with the Calendar component */}
        <Calendar style={styles.agenda}
          // You can customize the calendar props here
          onDayPress={(day) => {
            // Handle day press event
            console.log('Selected day', day);
          }}
        />
      </View>
      <View style={styles.containerBackground}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text>University Activities</Text>
        <View style={styles.activityContainer}>
          {activities.map((activity, index) => (
            <Activity key={index} activity={activity} />
          ))}
        </View>
      </ScrollView>
      </View>
    </SafeAreaView>


    );
  };
  
  const styles = StyleSheet.create({
    agendaContainer: {
      backgroundColor: '#095dac',
      padding: 20
    },
    agenda: {
      borderRadius: 20,
      padding: 10
    },
    safeArea: {
      backgroundColor: '#095dac'
    },
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
       // Adjust as needed
       borderRadius: 20,
       backgroundColor: '#fff'
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
  });

export default AgendaPage;
