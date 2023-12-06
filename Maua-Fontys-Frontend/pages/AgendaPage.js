import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button, SafeAreaView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Activity from '../components/Activity';
import {customStyles} from '../assets/style';
import Menu from '../components/Menu';
import '../utils/i18n'
import { useTranslation } from 'react-i18next'


const AgendaPage = () => {

  const {t, i18n} = useTranslation()
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
      <SafeAreaView style={customStyles.body_background_agendapage}>
        <Menu></Menu>
      <View style={customStyles.agenda_container}>
        <Calendar style={customStyles.agenda}
          onDayPress={(day) => {
            console.log('Selected day', day);
          }}
        />
      </View>
      <ScrollView contentContainerStyle={customStyles.agenda_activity_container}>
      <Text style={customStyles.body_text}>{t("University Activities")}</Text>
        <View style={""}>
          {activities.map((activity, index) => (
            <Activity key={index} activity={activity} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
   );
  };
  
export default AgendaPage;
