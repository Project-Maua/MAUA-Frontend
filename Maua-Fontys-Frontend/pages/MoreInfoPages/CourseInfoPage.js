import { Text, View, Image, ScrollView } from "react-native"
import {customStyles} from '../../assets/style'
import { useTranslation } from 'react-i18next'

const CourseInfoPage = ({route}) => {
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
            <Text style={customStyles.body_text}>Course information</Text>
            <View style={customStyles.message_container}>
                <Text style={customStyles.message_container_title}>{t("What can you find?")} </Text>
                <Text style={customStyles.message_container_text}>{t("here you can find everything you need to know about this course.")}</Text>
            </View>
          <View style={customStyles.description_card_content}>
                <Text style={customStyles.description_card_title}>{'duration:'}</Text>
                <Text style={customStyles.description_card_message}>{info.duration}</Text>

                <Text style={customStyles.description_card_title}>{'tuition:'}</Text>
                <Text style={customStyles.description_card_message}>{info.tuition}</Text>

                <Text style={customStyles.description_card_title}>{'shift:'}</Text>
                <Text style={customStyles.description_card_message}>{info.shift}</Text>

                <Text style={customStyles.description_card_title}>{'description:'}</Text>
                <Text style={customStyles.description_card_message}>{info.description}</Text>
            </View>
        </ScrollView>
    )
}

export default CourseInfoPage