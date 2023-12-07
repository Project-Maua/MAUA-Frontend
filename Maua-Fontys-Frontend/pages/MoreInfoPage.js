import { Text, View, Image, ScrollView } from "react-native"
import {customStyles} from '../assets/style'

const MoreInfoPage = ({route}) => {
    const info = route.params.info

    return (
        <ScrollView>
            <Image source={{uri: info.image}} style={customStyles.card_image} />
            <View style={customStyles.card_content}>
                <Text style={customStyles.card_title}>{info.name}</Text>

                <Text style={customStyles.card_subtitle}>{'duration:'}</Text>
                <Text style={customStyles.card_message}>{info.duration}</Text>

                <Text style={customStyles.card_subtitle}>{'tuition:'}</Text>
                <Text style={customStyles.card_message}>{info.tuition}</Text>

                <Text style={customStyles.card_subtitle}>{'shift:'}</Text>
                <Text style={customStyles.card_message}>{info.shift}</Text>

                <Text style={customStyles.card_subtitle}>{'description:'}</Text>
                <Text style={customStyles.card_message}>{info.description}</Text>
            </View>
        </ScrollView>
    )
}

export default MoreInfoPage