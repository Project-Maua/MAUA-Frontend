import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
const cardImage = require('../assets/schoolmaua.jpg');
const Course = (props) => {
    const [course, setCourse] = useState(props.course)

    return (
    <View style={styles.course}>
      <Image source={cardImage} style={styles.cardImage} />
        <View style={styles.content}>
            <Text style={styles.title}>{course.name}</Text>
            <Text style={styles.message}>{course.description}</Text>
              <View style={styles.containeritem}>            
                  <TouchableOpacity onPress={""}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>More info</Text>
                  </TouchableOpacity> 
              </View>
        </View>
    </View>
      
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
//CardImage
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
cardImage: {
  width: '100%',
  height: 120,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  resizeMode: 'cover',
},
  });

export default Course;
