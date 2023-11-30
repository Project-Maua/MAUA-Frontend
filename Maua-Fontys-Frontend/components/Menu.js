import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Menu = () => {
    return (
    <View style={styles.header}>
            <TouchableOpacity style={styles.icon}>
                <Icon name="bars" size={25} color="#095DAC" />
            </TouchableOpacity>
            <Image
                    source={require('../assets/logo-maua.png')} 
                    style={styles.logo}
                />
            <TouchableOpacity style={styles.icon}>
                <Icon name="bell" size={25} color="#095DAC" />
            </TouchableOpacity>
    </View>
 );
};
const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingTop: 40,
      paddingBottom: 10,
    },
    icon: {
        padding: 5,
    },
    logo: {
    width: 90, 
    height: 40,
  },
});
export default Menu;