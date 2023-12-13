import React, { useState, useEffect, useLayoutEffect  } from 'react'
import { View, Text, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import {customStyles} from '../assets/style'
import '../utils/i18n'
import { useTranslation } from 'react-i18next'
import CalendarLanguages from '../utils/CalendarLanguages'
import Constants from '../utils/Constants'
import ActivityDayFilter from '../components/ActivityDayFilter'

LocaleConfig.locales['en'] = CalendarLanguages.en
LocaleConfig.locales['pt-br'] = CalendarLanguages['pt-br']

const studentID = 'st-000002'
const month = '02'
const year = '2024'
const initialDay = '05'
const lastDay = '11'

const AgendaPage = () => {
  const {t, i18n} = useTranslation()
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true) 
  const [day, setDay] = useState(parseInt(initialDay)) 
  LocaleConfig.defaultLocale = t('en')

    const getActivities = async () => {
      try {
        const response = await fetch( `${Constants.registrations_url}\\${studentID}`, {
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
      setData(Activities)
      setLoading(false)
    }

    useEffect(() => {
       getMock() // Change to getActivities()
    }, [])

    const getMarkedDate = () => {
      markedDates = {}
      date = `${year}-${month}-${day < 10 ? '0' + day:day}`
      markedDates[date] = {selected: true, selectedColor: '#095dac'}
      return markedDates
    }

    return(
      <SafeAreaView style={customStyles.body_background_agendapage}>
      <View style={customStyles.agenda_container}>
        <Calendar 
          style={customStyles.agenda}
          initialDate={`${year}-${month}-01`}
          minDate={`${year}-${month}-${initialDay}`}
          maxDate={`${year}-${month}-${lastDay}`}
          firstDay={1}
          scrollEnabled={false}
          hideExtraDays={true} 
          hideArrows={true}
          markedDates={getMarkedDate()}
          onDayPress={({day}) => {
            setDay(day)
          }}
        />
      </View>
      <ScrollView contentContainerStyle={customStyles.agenda_activity_container}>
        <Text style={customStyles.body_text}>{t("Your activities on day" + " " + day)}</Text>
        <ActivityIndicator size="large" color="#095DAC" animating={isLoading}/>
        <ActivityDayFilter data={data} day={day}/>
      </ScrollView>
    </SafeAreaView>
   )
  }
  
export default AgendaPage

const Activities = [
  {
      'id': 'ac-000001',
      'image': 'https://maua.br/img/upload/campus-scs-1645732308.jpg',
      'name': 'Tracking on Campus',
      'startTime': '2023/09/05 11:30:00.000',
      'endTime': '2023/09/13 13:20:00.000',
      'location': 'Block D - room D1',
      'description': 'Students will tack ... use time... calculus...'
  },
  {
      'id': 'ac-000002',
      'image': 'https://maua.br/img/upload/grupos-de-extensao-imt-1694809070.jpg',
      'name': 'Rocket challenge',
      'startTime': '2023/09/11 13:30:00.000',
      'endTime': '2023/09/14 15:45:00.000',
      'location': 'Block S - room Field',
      'description': 'Students throw ... rockets... with water...'
  },
  {
      'id': 'ac-000003',
      'image': 'https://maua.br/img/upload/banner-controle-automacao-1677511251.jpg',
      'name': 'Coding Workshop',
      'startTime': '2023/09/11 09:00:00.000',
      'endTime': '2023/09/15 12:00:00.000',
      'location': 'Block W - room W402',
      'description': 'Learn the basics of coding using Python and JavaScript.'
  },
  {
      'id': 'ac-000004',
      'image': 'https://maua.br/img/upload/matriculas-e-transferencias-1695241733.jpg',
      'name': 'Socialization Dynamic',
      'startTime': '2023/09/07 14:00:00.000',
      'endTime': '2023/09/16 18:00:00.000',
      'location': 'Block S - Gymnasium',
      'description': 'Explore the creativity of students through various activities.'
  },
  {
      'id': 'ac-000005',
      'image': 'https://maua.br/img/upload/iniciacao-cientifica-1663256113.jpg',
      'name': 'Chemistry Challenge',
      'startTime': '2023/09/08 16:00:00.000',
      'endTime': '2023/09/17 17:30:00.000',
      'location': 'Block R - room R2',
      'description': 'Engage in a friendly competition to promote knowledge and integration.'
  }
]
