import Icon from 'react-native-vector-icons/Octicons';
import {Text, TouchableOpacity } from 'react-native';
import {customStyles} from '../assets/style';
const SettingButton = ({icon, text}) => {
    return (
        <TouchableOpacity style={customStyles.button_settings}>
            <Text style={customStyles.button_settings_text}>{text}</Text>
            <Icon name={icon} style={customStyles.button_settings_icon} />
        </TouchableOpacity>
    )
}

export default SettingButton