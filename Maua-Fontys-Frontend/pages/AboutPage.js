import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import Course from '../components/Course.js';
import Menu from '../components/Menu';
import {customStyles} from '../assets/style';
const cardImage = require('../assets/schoolmaua.jpg');
const AboutPage = ({navigation}) => {
    const handleCourses = () => {
        navigation.navigate('Courses')

    };
    const handleAbout = () => {
        navigation.navigate('About')

    };
    const handleOrginisation = () => {
        navigation.navigate('Orginisation')

    };
  const about = [
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
  const [email, setEmail] = useState('');


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
      <View style={""}>
        <Menu />
        <View style={customStyles.topbar}>
            <TouchableOpacity style={customStyles.button_active} onPress={handleAbout} >
                <Text style={customStyles.button_active_text}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={customStyles.button} onPress={handleCourses}>
                <Text style={customStyles.button_text}>Courses</Text>
            </TouchableOpacity>
            <TouchableOpacity style={customStyles.button} onPress={handleOrginisation}>
                <Text style={customStyles.button_text}>Orginisation</Text>
            </TouchableOpacity>
        </View>
        <Text style={customStyles.body_text}>About Maua</Text>
        <View style={customStyles.message_container}>
          <Text style={customStyles.message_container_title}>Here you can find more information about the Maua University </Text>
          <Text style={customStyles.message_container_text}>Provided by Maua University</Text>
        </View>
        <Text style={customStyles.body_text}>Maua staff</Text>
        <View style={customStyles.row_two_components}>
            <View style={customStyles.card}>
              <Image source={cardImage} style={customStyles.card_image} />
              <View style={customStyles.card_content}>
                <Text style={customStyles.card_title}>Rector</Text>
                <Text style={customStyles.card_message}>...</Text>
                <View style={customStyles.containeritem}>            
                  <TouchableOpacity onPress={""}
                    style={customStyles.button}
                  >
                    <Text style={customStyles.button_text}>More info</Text>
                  </TouchableOpacity> 
                </View>
              </View>
            </View>
            <View style={customStyles.card}>
              <Image source={cardImage} style={customStyles.card_image} />
              <View style={customStyles.card_content}>
                <Text style={customStyles.card_title}>Vice rector</Text>
                <Text style={customStyles.card_message}>...</Text>
                <View style={customStyles.containeritem}>            
                  <TouchableOpacity onPress={""}
                    style={customStyles.button}
                  >
                    <Text style={customStyles.button_text}>More info</Text>
                  </TouchableOpacity> 
                </View>
              </View>
            </View>
          </View>
        <Text style={customStyles.body_text}>Internal Program</Text>
        <View style={customStyles.row_align_center}>
              <View style={""}>
                {about.map((course, index) => (
                  <Course key={index} course={course} />
                ))}
              </View>
        </View>
      </View>
    </View>
  </ScrollView> 

  );
};
export default AboutPage;
