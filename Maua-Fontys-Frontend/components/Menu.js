import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {customStyles} from '../assets/style';

const Menu = ({ navigation }) => {
    const handleAgenda = () => {
        //Navigation test:
        navigation.navigate('Agenda')
    
        // Implement your login logic here
        // Typically, you would make an API call to authenticate the user
      };
    return (
    <View style={customStyles.menu}>
            <TouchableOpacity style={customStyles.menu_icon} onPress={handleAgenda}>
                <Icon name="bars" size={25} color="#095DAC"/>
            </TouchableOpacity>
            <Image
                    source={require('../assets/logo-maua.png')} 
                    style={customStyles.menu_logo}
                />
            <TouchableOpacity style={customStyles.menu_icon}>
                <Icon name="bell" size={25} color="#095DAC" />
            </TouchableOpacity>
    </View>
 );
};

export default Menu;