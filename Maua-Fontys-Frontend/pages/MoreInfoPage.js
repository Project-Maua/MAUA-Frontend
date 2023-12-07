import { Text, View, Image, ScrollView } from "react-native"
import {customStyles} from '../assets/style'

const MoreInfoPage = ({route}) => {
    const info = route.params.info

    return (
        <ScrollView>
            <Image source={{uri: info.image}} style={customStyles.card_image} />
            <View style={customStyles.card_content}>
                <Text style={customStyles.card_title}>{info.name}</Text>

                <Text style={customStyles.card_title}>{'duration:'}</Text>
                <Text style={customStyles.card_message}>{info.duration}</Text>

                <Text style={customStyles.card_title}>{'tuition:'}</Text>
                <Text style={customStyles.card_message}>{info.tuition}</Text>

                <Text style={customStyles.card_title}>{'shift:'}</Text>
                <Text style={customStyles.card_message}>{info.shift}</Text>

                <Text style={customStyles.card_title}>{'description:'}</Text>
                <Text style={customStyles.card_message}>{info.description}</Text>
            </View>
        </ScrollView>
    )
}

export default MoreInfoPage