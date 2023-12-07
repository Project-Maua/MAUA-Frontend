import {StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {customStyles} from '../assets/style'

const SocialmediaButton = ({icon}) => {
    return (
        <TouchableOpacity style={customStyles.socialmedia_button}>
            <Icon name={icon} size={30} style={customStyles.socialmedia_icon}/>
        </TouchableOpacity>
    )
}

export default SocialmediaButton