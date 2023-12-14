import { Text, View, Image, ScrollView, Ol, Li } from "react-native"
import {customStyles} from '../../assets/style'
import { useTranslation } from 'react-i18next'

const fontysImage = require('../../assets/fontys.jpg')
const MauaFontysInfoPage = ({route}) => {
    const {t, i18n} = useTranslation()

    return (
        <ScrollView>
            <View style={customStyles.description_header_container}>
            <Image source={fontysImage} style={customStyles.description_header_image} />
                <View style={customStyles.overlay_gray}>
                    <Text style={customStyles.header_text}>{t("")}</Text>
                </View>
            </View>
            <Text style={customStyles.body_text}>{t('Maua-Fontys Project')}</Text>
            <View style={customStyles.message_container}>
                <Text style={customStyles.message_container_title}>{t("What can you find?")} </Text>
                <Text style={customStyles.message_container_text}>{t("here you can find everything you need to know about this project.")}</Text>
            </View>
            <View style={customStyles.card_content}>

                <Text style={customStyles.card_title}>{t('What is the Maua-Fontys project?')}</Text>
                <Text style={customStyles.card_message}>{"Students from Fontys in the Netherlands and students from Maua University in Brazil worked together to put together this application. The students who contributed to this project are:"}</Text>
                <Text style={customStyles.card_title}>{"From Brazil:"}</Text>
                <Text style={customStyles.card_message}>{"Raphael Marchetti Calciolari: "}</Text>
                <Text style={customStyles.card_message}>{"Matheus Nakai: "}</Text>
                <Text style={customStyles.card_message}>{"Gustavo Zamboni: "}</Text>
                <Text style={customStyles.card_message}>{"Martin Ropke: "}</Text>
                <Text style={customStyles.card_title}>{"From the Netherlands:"}</Text>
                <Text style={customStyles.card_message}>{"Chantal Maas: https://www.linkedin.com/in/chantal-maas-605aa22a4/"}</Text>
                <Text style={customStyles.card_message}>{"Stijn Hoeks: https://www.linkedin.com/in/stijn-hoeks-3764a4193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}</Text>
                <Text style={customStyles.card_message}>{"Jarno Looij: https://www.linkedin.com/in/jarno-looij-176b26180?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}</Text>
                <Text style={customStyles.card_message}>{"Tim Spitters: https://www.linkedin.com/in/tim-spitters?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"}</Text>
                <Text style={customStyles.card_message}>{"Jason Spaninks: "}</Text>
                <Text style={customStyles.card_message}>{"Ben van der Linden: "}</Text>
                <Text style={customStyles.card_title}>{"Teachers/Professors"}</Text>
                <Text style={customStyles.card_message}>{"From the Netherlands: Mark Mestrom"}</Text>
                <Text style={customStyles.card_message}>{"From Brazil: Rodrigo Bossini"}</Text>
                <Text style={customStyles.card_title}>{"More information"}</Text>
                <Text style={customStyles.card_message}>{"For more information about the students and the schools, please check the links below"}</Text>
                <Text style={customStyles.card_message}>{"https://maua.br/ "}</Text>
                <Text style={customStyles.card_message}>{"https://www.fontys.nl/Home.htm"}</Text>
            </View>
        </ScrollView>
    )
}

export default MauaFontysInfoPage