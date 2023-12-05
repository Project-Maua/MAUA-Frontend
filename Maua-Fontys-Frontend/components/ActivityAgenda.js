import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';


const AgendaActivity = (props) => {
    const [activity, setActivity] = useState(props.activity)

    return (
    <View style={styles.activity}>
      <Image 
        // source={{uri: activity.image}} // Fix later
        style={styles.image}
      />
      <View style={styles.activityText}>
      <Text style={styles.activityTitle}>{activity.name}</Text>
      <Text style={styles.activityDescription}>{activity.description}</Text>
      </View>
      <View>
      <Button title='Subscribe' />
      <Text>{activity.subscribed}</Text>
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
    image: {
      width: 60,
      height: 80,
      resizeMode: 'cover',
      borderWidth: 2,
      borderColor: '#000',
      borderRadius: 20,
    },
    activity: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      flexDirection: 'row',
      marginBottom: 20,
      backgroundColor: '#095dac',
      borderRadius: 20,
    },
    activityTitle: {
      fontSize: 18,
      color: '#fff'
    },
    activityDescription:{
      color: '#fff'
    },
    activityText:{
      width: '50%',
      margin: 10,
    },
  });

export default AgendaActivity;