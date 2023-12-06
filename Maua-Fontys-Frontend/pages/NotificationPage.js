import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import Notifications from '../components/Notifications';
import {customStyles} from '../assets/style';
const NotificationPage = () => {

    const notifications = [
        {
            'id': 'no-0000123',
            'title': 'New activity',
            'description': 'Dear students, this new activity will take place...',
            'creationTime': '2023/09/13 08:34:33.252',
            'updatedTime': '2023/09/13 08:34:33.032'
        },
        {
            'id': 'no-0000127',
            'title': 'Activity delayed',
            'description': 'Unfortunately the Rocket Challenge will be delayed due to intense rain...',
            'creationTime': '2023/09/12 06:34:33.073',
            'updatedTime': '2023/09/12 09:35:32.000'
        }
    ]

    return (
        <SafeAreaView>
            <ScrollView>
                <View>

                    <Text style={customStyles.body_text}>Notifications info</Text>
                    <View style={customStyles.message_container}>
                        <Text style={customStyles.message_container_title}>What can you find?</Text>
                        <Text style={customStyles.message_container_text}>Here you can find you latest notifications.</Text>
                    </View>
                    <Text style={customStyles.body_text}>Notifications</Text>
                    <View>
                        {notifications.map((notification, index) => (
                            <Notifications key={index} notification={notification} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default NotificationPage;