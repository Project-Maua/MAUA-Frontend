import { Text, View, Image, ScrollView } from "react-native"
import {customStyles} from '../../assets/style'
import { useTranslation } from 'react-i18next'

const ActivityInfoPage = ({route}) => {
    const info = route.params.info
    const {t, i18n} = useTranslation()

    return (
        <ScrollView>
            <View style={customStyles.description_header_container}>
            <Image source={{uri: info.image}} style={customStyles.description_header_image} />
                <View style={customStyles.overlay_gray}>
                    <Text style={customStyles.header_text}>{t(info.name)}</Text>
                </View>
            </View>
            <Text style={customStyles.body_text}>Activity information</Text>
            <View style={customStyles.message_container}>
                <Text style={customStyles.message_container_title}>{t("What can you find?")} </Text>
                <Text style={customStyles.message_container_text}>{t("here you can find everything you need to know about this activity.")}</Text>
            </View>
            <View style={customStyles.card_content}>

                <Text style={customStyles.card_title}>{'startTime:'}</Text>
                <Text style={customStyles.card_message}>{info.startTime}</Text>

                <Text style={customStyles.card_title}>{'endTime:'}</Text>
                <Text style={customStyles.card_message}>{info.endTime}</Text>

                <Text style={customStyles.card_title}>{'location:'}</Text>
                <Text style={customStyles.card_message}>{info.location}</Text>

                <Text style={customStyles.card_title}>{'description:'}</Text>
                <Text style={customStyles.card_message}>{info.description}</Text>
            </View>
        </ScrollView>
    )
}

export default ActivityInfoPage