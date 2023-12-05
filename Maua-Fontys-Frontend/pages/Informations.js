import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Course from '../components/Course.js';
import Menu from '../components/Menu';
const cardImage = require('../assets/schoolmaua.jpg');

const courses = [
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
]

const organizationsData = [
    { id: 1, image: "https://classic.exame.com/wp-content/uploads/2020/04/gettyimages-1168910967-e1587388035606.jpg?quality=70&strip=info&w=1024", name: 'Organizarion 1', description: 'Organization Description 1' },
    { id: 2, image: "https://classic.exame.com/wp-content/uploads/2020/04/gettyimages-1168910967-e1587388035606.jpg?quality=70&strip=info&w=1024", name: 'Organizarion 2', description: 'Organization Description 2' },
    { id: 3, image: "https://classic.exame.com/wp-content/uploads/2020/04/gettyimages-1168910967-e1587388035606.jpg?quality=70&strip=info&w=1024", name: 'Organizarion 3', description: 'Organization Description 3' }
];

const ItemDetail = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <View style={{ padding: 10 }}>
          <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
          <Text>{item.name}</Text>
          {expanded && <Text>{item.description}</Text>}
        </View>
      </TouchableOpacity>
    </View>
  );
};
const CoursesScreen = async () => {
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
useEffect(() => {
  CoursesScreen();
}, []);
  return (
    <ScrollView>
        <Text style={styles.textbetween}>Maua courses</Text>
        <View style={styles.MessageContainer}>
          <Text style={styles.Message}>Here you can find an overview of the courses at Maua </Text>
          <Text style={styles.SmallerMessage}>Provided by Maua University</Text>
        </View>
        <Text style={styles.textbetween}>School information</Text>
        <View style={styles.rowmiddle}>
              <View style={styles.container}>
                {courses.map((course, index) => (
                  <Course key={index} course={course} />
                ))}
              </View>
        </View>
    </ScrollView>      
  );
};

const OrganizationsScreen = () => {
  return (
    <FlatList
      data={organizationsData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ItemDetail item={item} />}
    />
  );
};

const AboutScreen = () => {
  return (
      <ScrollView>
          <Text style={styles.textbetween}>About</Text>
          <View style={styles.MessageContainer}>
            <Text style={styles.Message}>6th of Februari | Tuesday </Text>
            <Text style={styles.SmallerMessage}>Location Maua Building A</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.card}>
              <Image source={cardImage} style={styles.cardImage} />
              <View style={styles.content}>
                <Text style={styles.title}>Rector</Text>
                <Text style={styles.message}>..</Text>
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
                <Text style={styles.message}>..</Text>
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
          <Text style={styles.textbetween}>School information</Text>
          <View style={styles.rowmiddle}>
          <Image source={cardImage} style={styles.cardImage} />
              <View style={styles.content}>
                <Text style={styles.title}>Vice rector</Text>
                <Text style={styles.message}>..</Text>
                <View style={styles.containeritem}>            
                  <TouchableOpacity onPress={""}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>More info</Text>
                  </TouchableOpacity> 
                </View>
              </View>
          </View>
      </ScrollView>
  );
};

// Configuração das abas de navegação
const Tab = createMaterialTopTabNavigator();

const Informations = () => {
  return (
        <Tab.Navigator>
          <Tab.Screen name="About" component={AboutScreen} />
          <Tab.Screen name="Courses" component={CoursesScreen} />
          <Tab.Screen name="Organizations" component={OrganizationsScreen} />
        </Tab.Navigator>
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
  rowmiddle:{
    flex: 1, 
    margin: 10,
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
  message: {
    fontSize: 16,
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

export default Informations;
