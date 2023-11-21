import {StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SocialmediaButton = ({icon}) => {
    return (
        <TouchableOpacity style={styles.socialmediabutton}>
            <Icon name={icon} size={30} style={styles.socialmediaicon}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    socialmediabutton:{
        backgroundColor: '#095DAC',
        borderRadius: 30,
        width: 50,
        height: 50,
        margin: 5,
      },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    socialmediaicon:{
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
      },
});

export default SocialmediaButton