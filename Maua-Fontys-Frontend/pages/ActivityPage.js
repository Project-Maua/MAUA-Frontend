import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Activity from '../components/Activity.js';

const headerImage = require('../assets/schoolmaua.jpg');
const title = "Welcome!";
  const message = "This is a sample card box in React Native.";
  const cardImage = require('../assets/schoolmaua.jpg');
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
        <View style={styles.imageContainer}>
          <Image source={headerImage} style={styles.headerImage} />
          <View style={styles.overlay}>
            <Text style={styles.text}>University of Technology Maua</Text>
          </View>
        </View>
        <Text style={styles.textbetween}>University activities</Text>
        <View style={styles.rowmiddle}>
              <View style={styles.container}>
                {activities.map((activity, index) => (
                  <Activity key={index} activity={activity} />
                ))}
              </View>
        </View>
      </View>
    </View>
  </ScrollView> 

  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerImage: {
    width: '97%',
    height: 170,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(60, 60, 60, 0.2)', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '97%',
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
});

export default ActivityPage;
