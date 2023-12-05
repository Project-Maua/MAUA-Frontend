import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';

const headerImage = require('../assets/schoolmaua.jpg');
const title = "Welcome!";
  const message = "This is a sample card box in React Native.";
  const cardImage = require('../assets/schoolmaua.jpg');
const StudentOrginisation = (props) => {
    const [StudentOrg, setStudentOrginisation] = useState(props.StudentOrginisation)

    return (
    <View style={styles.StudentOrg}>
      <Image source={cardImage} style={styles.cardImage} />
        <View style={styles.content}>
            <Text style={styles.title}>{StudentOrg.name}</Text>
            <Text style={styles.message}>{StudentOrg.description}</Text>
            <Text>{StudentOrg.subscribed}</Text>
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

export default StudentOrginisation;