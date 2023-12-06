import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Course from '../components/Course.js';
import Menu from '../components/Menu';
import {customStyles} from '../assets/style';
const CoursePage = ({navigation}) => {
    const handleCourses = () => {
        navigation.navigate('Courses')

    };
    const handleAbout = () => {
        navigation.navigate('About')

    };
    const handleOrginisation = () => {
        navigation.navigate('Orginisation')

    };
  const courses = [
    {
      'id': 'co-432453', 
      'image': 'https://example.com/image432453', 
      'name': 'Administration', 
      'description': 'Students will know what to ... do with... their lifes...', 
      'duration': '4 years', 
      'tuition': 2365.00, 
      'shift': 'night' 
    },
    {
      'id': 'co-432454', 
      'image': 'https://example.com/image432454', 
      'name': 'Computer Engineering', 
      'description': 'Students will build ... autonomous vehicles... and die... poor...', 
      'duration': '5 years', 
      'tuition': 3891.00, 
      'shift': 'day' 
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
            <TouchableOpacity style={customStyles.button} onPress={handleAbout} >
                <Text style={customStyles.button_text}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={customStyles.button_active} onPress={handleCourses}>
                <Text style={customStyles.button_active_text}>Courses</Text>
            </TouchableOpacity>
            <TouchableOpacity style={customStyles.button} onPress={handleOrginisation}>
                <Text style={customStyles.button_text}>Orginisation</Text>
            </TouchableOpacity>
        </View>
        <Text style={customStyles.body_text}>Maua courses</Text>
        <View style={customStyles.message_container}>
          <Text style={customStyles.message_container_title}>Here you can find an overview of the courses at Maua </Text>
          <Text style={customStyles.message_container_text}>Provided by Maua University</Text>
        </View>
        <Text style={customStyles.body_text}>University activities</Text>
        <View style={customStyles.row_align_center}>
              <View style={""}>
                {courses.map((course, index) => (
                  <Course key={index} course={course} />
                ))}
              </View>
        </View>
      </View>
    </View>
  </ScrollView> 

  );
};

export default CoursePage;
