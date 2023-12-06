import React, { useState } from 'react';
import { View, Text, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import {customStyles} from '../assets/style';

  const cardImage = require('../assets/schoolmaua.jpg');
const Activity = (props) => {
    const [activity, setActivity] = useState(props.activity)

    return (
    <View style={""}>
      <Image source={cardImage} style={customStyles.card_image} />
        <View style={customStyles.card_content}>
            <Text style={customStyles.card_title}>{activity.name}</Text>
            <Text style={customStyles.card_message}>{activity.description}</Text>
            <Text>{activity.subscribed}</Text>
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
