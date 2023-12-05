import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Activity from '../components/Activity.js';

const headerImage = require('../assets/schoolmaua.jpg');
  const cardImage = require('../assets/schoolmaua.jpg');
const StudentOrginisationPage = () => {

  const StudentOrg = [
    {
      'id': 'or-332453', 
      'image': 'https://example.com/image332453', 
      'name': 'Nawat Games', 
      'description': 'Build games ... like crazy... nonstop... Unity... breaks everything...',
    },
    {
      'id': 'or-332459', 
      'image': 'https://example.com/image332459', 
      'name': 'Bateria Mauá', 
      'description': 'Play the drums... always the... same... music in front of... Mauá...', 
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
            <Text style={styles.text}>Student orginisations of Maua</Text>
          </View>
        </View>
        <Text style={styles.textbetween}>Orginisations</Text>
        <View style={styles.rowmiddle}>
              <View style={styles.container}>
                {StudentOrg.map((activity, index) => (
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

export default StudentOrginisationPage;
