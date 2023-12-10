import { Text, View, Image, ScrollView } from "react-native"
import {customStyles} from '../../assets/style'

const DescriptionInfoPage = ({route}) => {
    const info = route.params.info

    return (
        <ScrollView>
            <Image source={{uri: info.image}} style={customStyles.card_image} />
            
            <View style={customStyles.card_content}>
                <Text style={customStyles.card_title}>{info.name}</Text>

                <Text style={customStyles.card_subtitle}>{'description:'}</Text>
                <Text style={customStyles.card_message}>{info.description}</Text>
            </View>
        </ScrollView>
    )
}

export default DescriptionInfoPage