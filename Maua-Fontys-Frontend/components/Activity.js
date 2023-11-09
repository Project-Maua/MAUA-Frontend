import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';


const Activity = (props) => {
    const [activity, setActivity] = useState(props.activity)

    return (
    <View style={styles.activity}>
      <Image 
        // source={{uri: activity.image}} // Fix later
        style={styles.image}
      />
      <Text>{activity.name}</Text>
      <Text>{activity.description}</Text>
      <Button title='Subscribe' />
      <Text>{activity.subscribed}</Text>
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
      width: 200,
      height: 200,
      resizeMode: 'cover'
    },
    activity: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#000',
      padding: 20,
    }
  });

export default Activity;
