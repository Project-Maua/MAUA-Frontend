import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Menu from '../components/Menu';
import Notifications from '../components/Notifications';

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
                    <Menu>

                    </Menu>
                    <Text style={styles.textbetween}>Notifications info</Text>
                    <View style={styles.agendaMessageContainer}>
                        <Text style={styles.agendaMessage}>What can you find?</Text>
                        <Text style={styles.agendaSmallerMessage}>Here you can find you latest notifications.</Text>
                    </View>
                    <Text style={styles.textbetween}>Notifications</Text>
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

const styles = StyleSheet.create({
    textbetween: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 15,
    },
    //Agendacontainer
  agendaSmallerMessage: {
    color: 'white',
    textAlign: 'left',
    marginLeft: 15,
    fontSize: 16,
    marginTop: 15,
  },
  agendaMessage: {
    color: 'white',
    textAlign: 'left',
    marginLeft: 15,
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 18,
  },
  agendaMessageContainer: {
    backgroundColor: '#095DAC',
    height: 120,
    width: '97%',
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default NotificationPage;