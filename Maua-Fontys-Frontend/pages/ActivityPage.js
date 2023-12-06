import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, Icon } from 'react-native';
import Activity from '../components/Activity.js';
import {customStyles} from '../assets/style';
import Menu from '../components/Menu.js';
import '../utils/i18n'
import { useTranslation } from 'react-i18next'

const headerImage = require('../assets/schoolmaua.jpg');
const title = "Welcome!";
const message = "This is a sample card box in React Native.";
const cardImage = require('../assets/schoolmaua.jpg');
const ActivityPage = ({}) => {

  const {t, i18n} = useTranslation()

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
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

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
  return (
  <ScrollView>
    <View>
        <Menu></Menu>
        <View style={customStyles.header_container}>
          <Image source={headerImage} style={customStyles.header_image} />
          <View style={customStyles.overlay_gray}>
            <Text style={customStyles.header_text}>{t("University of Technology Maua")}</Text>
          </View>
        </View>
        <Text style={customStyles.body_text}>{t("University Activities")}</Text>
        <View style={customStyles.row_align_center}>
              <View style={""}>
                {activities.map((activity, index) => (
                  <Activity key={index} activity={activity} />
                ))}
              </View>
        </View>
    </View>
  </ScrollView> 

  );
};

export default ActivityPage;
