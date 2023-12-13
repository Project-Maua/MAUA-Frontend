import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native'
import Notifications from '../components/Notifications'
import {customStyles} from '../assets/style'
import Constants from '../utils/Constants'

const NotificationPage = () => {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
  
    const getNotifications = async () => {
      try {
        const response = await fetch(Constants.notigications_url, {
          header:{
            "Content-Type":"application/json"
          }
        })
        const json = await response.json()
        setData(json)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
  
    const getMock = () => {
      setData(notifications)
      setLoading(false)
    }

    useEffect(() => {
       getMock() // Change to getNotifications()
    }, [])

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
                    <ActivityIndicator size="large" color="#095DAC" animating={isLoading}/>
                    <View>
                        {data.map((notification, index) => (
                            <Notifications key={index} notification={notification} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default NotificationPage

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
    },
    {
        'id': 'no-0000128',
        'title': 'Workshop Announcement',
        'description': 'Exciting workshop on artificial intelligence scheduled for next week. Don\'t miss it!',
        'creationTime': '2023/09/14 10:12:45.120',
        'updatedTime': '2023/09/14 10:12:45.120'
    },
    {
        'id': 'no-0000129',
        'title': 'Library Closure',
        'description': 'The library will be closed for maintenance on Saturday. Plan your studies accordingly.',
        'creationTime': '2023/09/15 14:20:00.000',
        'updatedTime': '2023/09/15 14:20:00.000'
    },
    {
        'id': 'no-0000130',
        'title': 'Job Fair Reminder',
        'description': 'Don\'t forget to attend the upcoming job fair on campus. Dress professionally!',
        'creationTime': '2023/09/16 16:45:00.000',
        'updatedTime': '2023/09/16 16:45:00.000'
    } 
]