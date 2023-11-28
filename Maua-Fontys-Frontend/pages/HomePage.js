import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import Menu from '../components/Menu';
  const title = "Welcome!";
  const message = "This is a sample card box in React Native.";
  const cardImage = require('../assets/schoolmaua.jpg');
  const headerImage = require('../assets/schoolmaua.jpg');
const HomePage = () => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View>
      <View style={""}>
        <Menu>

        </Menu>
        <View style={styles.imageContainer}>
          <Image source={headerImage} style={styles.headerImage} />
          <View style={styles.overlay}>
            <Text style={styles.text}>University of Technology Maua</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.containerbutton} >
              <Image source={cardImage} style={styles.containerImage}></Image>
              <View style={styles.overlay}>
                <Icon name="calendar" size={25} color="white" style={styles.buttonIcon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerbutton}>
              <Image source={cardImage} style={styles.containerImage}></Image>
              <View style={styles.overlay}>
                <Icon name="graduation-cap" size={25} color="white" style={styles.buttonIcon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerbutton}>
              <Image source={cardImage} style={styles.containerImage}></Image>
              <View style={styles.overlay}>
                <Icon name="compass" size={25} color="white" style={styles.buttonIcon} />
              </View>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.containerbutton}>
              <Image source={cardImage} style={styles.containerImage}></Image>
              <View style={styles.overlay}>
                <Icon name="play" size={25} color="white" style={styles.buttonIcon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerbutton}>
              <Image source={cardImage} style={styles.containerImage}></Image>
              <View style={styles.overlay}>
                <Icon name="users" size={25} color="white" style={styles.buttonIcon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerbutton}>
              <Image source={cardImage} style={styles.containerImage}></Image>
              <View style={styles.overlay}>
                <Icon name="info-circle" type="font-awesome" size={25} color="white" style={styles.buttonIcon} />
              </View>
            </TouchableOpacity>
        </View>
        <View style={""}>
          <Text style={styles.textbetween}>Agenda</Text>
          <View style={styles.agendaMessageContainer}>
            <Text style={styles.agendaMessage}>6th of Februari | Tuesday </Text>
            <Text style={styles.agendaSmallerMessage}>Location Maua Building A</Text>
          </View>
        </View>
        <Text style={styles.textbetween}>Maua activities</Text>
        <View style={styles.row}>
            <View style={styles.card}>
              <Image source={cardImage} style={styles.cardImage} />
              <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.message}>{message}</Text>
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
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.message}>{message}</Text>
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
        </View>
    </View>
    </ScrollView>
    </SafeAreaView>
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
  //Agendacontainer
  agendaSmallerMessage: {
    color: 'white',
    textAlign: 'left',
    marginLeft: 15,
    fontSize: 16,
    marginTop: 15,
  },
  agendaMessage: {
    color: 'white',
    textAlign: 'left',
    marginLeft: 15,
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 18,
  },
  agendaMessageContainer: {
    backgroundColor: '#095DAC',
    height: 120,
    width: '97%',
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
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
  //buttongrid
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  containerbutton:{
    backgroundColor: 'grey',
    width: '30%',
    height: 100,
    borderRadius: 10,
  },
  containerImage: {
    resizeMode: 'cover',
    height: 100,
    width: 'auto',
    opacity: 0.8,
    borderRadius: 10
  },
  buttonIcon:{

  }
});

export default HomePage;

