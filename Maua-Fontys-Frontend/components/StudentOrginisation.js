import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {customStyles} from '../assets/style'

const cardImage = require('../assets/schoolmaua.jpg')

const StudentOrganisation = (props) => {
    const [StudentOrg, setStudentOrganisation] = useState(props.StudentOrganisation)

    return (
    <View style={""}>
      <Image source={cardImage} style={customStyles.card_image} />
        <View style={customStyles.card_content}>
            <Text style={customStyles.card_title}>{StudentOrg.name}</Text>
            <Text style={customStyles.card_message}>{StudentOrg.description}</Text>
            <Text>{StudentOrg.subscribed}</Text>
              <View style={customStyles.containeritem}>            
                  <TouchableOpacity onPress={""}
                    style={customStyles.button}
                  >
                    <Text style={customStyles.button_text}>More info</Text>
                  </TouchableOpacity> 
              </View>
        </View>
    </View>
      
    )
  }

export default StudentOrganisation