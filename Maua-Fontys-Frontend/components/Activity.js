import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {customStyles} from '../assets/style';

  const cardImage = require('../assets/schoolmaua.jpg');
const Activity = (props) => {
    const [activity, setActivity] = useState(props.activity)

    return (
    <View style={""}>
      <Image source={{uri: activity.image}} style={customStyles.card_image} />
        <View style={customStyles.card_content}>
            <Text style={customStyles.card_title}>{activity.name}</Text>
            <Text style={customStyles.card_message}>{activity.description}</Text>
            <Text style={customStyles.card_message}>{activity.startTime}</Text>
            <Text style={customStyles.card_message}>{activity.endTime}</Text>
            <Text style={customStyles.card_message}>{activity.location}</Text>
              <View style={customStyles.containeritem}>            
                  <TouchableOpacity onPress={""}
                    style={customStyles.button}
                  >
                    <Text style={customStyles.button_text}>More info</Text>
                  </TouchableOpacity> 
              </View>
        </View>
    </View>
      
    );
  };

export default Activity;
