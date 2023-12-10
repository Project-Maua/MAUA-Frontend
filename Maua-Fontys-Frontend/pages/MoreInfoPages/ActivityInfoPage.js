import { Text, View, Image, ScrollView } from "react-native"
import {customStyles} from '../../assets/style'

const ActivityInfoPage = ({route}) => {
    const info = route.params.info

    return (
        <ScrollView>
            <Image source={{uri: info.image}} style={customStyles.card_image} />
            <View style={customStyles.card_content}>
                <Text style={customStyles.card_title}>{info.name}</Text>

                <Text style={customStyles.card_subtitle}>{'startTime:'}</Text>
                <Text style={customStyles.card_message}>{info.startTime}</Text>

                <Text style={customStyles.card_subtitle}>{'endTime:'}</Text>
                <Text style={customStyles.card_message}>{info.endTime}</Text>

                <Text style={customStyles.card_subtitle}>{'location:'}</Text>
                <Text style={customStyles.card_message}>{info.location}</Text>

                <Text style={customStyles.card_subtitle}>{'description:'}</Text>
                <Text style={customStyles.card_message}>{info.description}</Text>
            </View>
        </ScrollView>
    )
}

export default ActivityInfoPage