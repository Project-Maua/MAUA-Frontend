import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Course from '../components/Course.js';

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
      <View style={styles.background}>
        <View style={styles.topBar}>
            <TouchableOpacity style={styles.containerButton} onPress={handleAbout} >
                <Text style={styles.containerText}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerActiveButton} onPress={handleCourses}>
                <Text style={styles.containerActiveText}>Courses</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerButton} onPress={handleOrginisation}>
                <Text style={styles.containerText}>Orginisation</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.textbetween}>Maua courses</Text>
        <View style={styles.MessageContainer}>
          <Text style={styles.Message}>Here you can find an overview of the courses at Maua </Text>
          <Text style={styles.SmallerMessage}>Provided by Maua University</Text>
        </View>
        <Text style={styles.textbetween}>University activities</Text>
        <View style={styles.rowmiddle}>
              <View style={styles.container}>
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

const styles = StyleSheet.create({
    SmallerMessage: {
        color: 'white',
        textAlign: 'left',
        marginLeft: 15,
        fontSize: 16,
        marginTop: 15,
      },
      Message: {
        color: 'white',
        textAlign: 'left',
        marginLeft: 15,
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 18,
      },
      MessageContainer: {
        backgroundColor: '#095DAC',
        height: 120,
        width: '97%',
        borderRadius: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      textbetween: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 15,
      },
    row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    position: 'relative',
    height: 170,
    marginBottom: 10, 
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  card: {
    width: "47%",
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
  cardImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
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
  rowmiddle:{
    flex: 1, 
    margin: 10,
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
  buttonText:{
    color: 'white',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 16,
  },
  //TopBar
  topBar:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  containerButton:{
    backgroundColor: '#095DAC',
    borderRadius: 15,
    width: '30%',
    alignItems: 'center',
    padding: 5,
    margin: 5,
  },
  containerText: {
    color: 'white',
  },
  //Active button
  containerActiveButton:{
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#095DAC',
    borderRadius: 15,
    width: '30%',
    alignItems: 'center',
    padding: 5,
    margin: 5,
  },
  containerActiveText:{
    color: '#095DAC',
  },
});

export default CoursePage;
