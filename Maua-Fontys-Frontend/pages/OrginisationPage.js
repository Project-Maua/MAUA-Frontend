import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Course from '../components/Course.js';
import Menu from '../components/Menu';
const cardImage = require('../assets/schoolmaua.jpg');
const OrginisationPage = ({ navigation }) => {
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
      <View style={styles.background}>
        <Menu />
        <View style={styles.topBar}>
            <TouchableOpacity style={styles.containerButton} onPress={handleAbout} >
                <Text style={styles.containerText}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerButton} onPress={handleCourses}>
                <Text style={styles.containerText}>Courses</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerActiveButton} onPress={handleOrginisation}>
                <Text style={styles.containerActiveText}>Orginisation</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.textbetween}>About Maua</Text>
        <View style={styles.MessageContainer}>
          <Text style={styles.Message}>Here you can find more information about the Maua University </Text>
          <Text style={styles.SmallerMessage}>Provided by Maua University</Text>
        </View>
        <Text style={styles.textbetween}>Maua Orginisations</Text>
        <View style={styles.row}>
            <View style={styles.card}>
              <Image source={cardImage} style={styles.cardImage} />
              <View style={styles.content}>
                <Text style={styles.title}>Rector</Text>
                <Text style={styles.message}>...</Text>
                <View style={styles.containeritem}>            
                  <TouchableOpacity onPress={""}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>More info</Text>
                  </TouchableOpacity> 
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <Image source={cardImage} style={styles.cardImage} />
              <View style={styles.content}>
                <Text style={styles.title}>Vice rector</Text>
                <Text style={styles.message}>...</Text>
                <View style={styles.containeritem}>            
                  <TouchableOpacity onPress={""}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>More info</Text>
                  </TouchableOpacity> 
                </View>
              </View>
            </View>
          </View>
        <Text style={styles.textbetween}>Internal Program</Text>
        <View style={styles.rowmiddle}>
              <View style={styles.container}>
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

export default OrginisationPage;
