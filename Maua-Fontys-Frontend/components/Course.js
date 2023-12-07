import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {customStyles} from '../assets/style';

const cardImage = require('../assets/schoolmaua.jpg');
const Course = (props) => {
    const [course, setCourse] = useState(props.course)

    return (
    <View style={""}>
      <Image source={{uri: course.image}} style={customStyles.card_image} />
        <View style={customStyles.card_content}>
            <Text style={customStyles.card_title}>{course.name}</Text>
            <Text style={customStyles.card_message}>{course.description.substr(0, 10)+'...'}</Text>
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

export default Course;
