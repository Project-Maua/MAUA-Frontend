import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import Activity from '../components/Activity.js'
import {customStyles} from '../assets/style'
import '../utils/i18n'
import { useTranslation } from 'react-i18next'
import Constants from '../utils/Constants.js'

const headerImage = require('../assets/schoolmaua.jpg')


const ActivityPage = ({}) => {
  const {t, i18n} = useTranslation()
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  const getActivities = async () => {
    try {
      const response = await fetch(Constants.activities_url, {
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

  useEffect(() => {
    getActivities()
  }, [])
  
  return (
  <ScrollView>
    <View>

        <View style={customStyles.header_container}>
          <Image source={headerImage} style={customStyles.header_image} />
          <View style={customStyles.overlay_gray}>
            <Text style={customStyles.header_text}>{t("University of Technology Maua")}</Text>
          </View>
        </View>
        <Text style={customStyles.body_text}>{t("University Activities")}</Text>
        <View style={customStyles.row_align_center}>
              <View style={""}>
                {Activities.map((activity, index) => (
                  <Activity key={index} activity={activity} />
                ))}
              </View>
        </View>
    </View>
  </ScrollView> 

  )
}

export default ActivityPage

const Activities = [
  {
      'id': 'ac-000001',
      'image': 'https://maua.br/img/upload/campus-scs-1645732308.jpg',
      'name': 'Tracking on Campus',
      'startTime': '2023/09/13 11:30:00.000',
      'endTime': '2023/09/13 13:20:00.000',
      'location': 'Block D - room D1',
      'description': 'Students will tack ... use time... calculus...'
  },
  {
      'id': 'ac-000002',
      'image': 'https://maua.br/img/upload/grupos-de-extensao-imt-1694809070.jpg',
      'name': 'Rocket challenge',
      'startTime': '2023/09/14 13:30:00.000',
      'endTime': '2023/09/14 15:45:00.000',
      'location': 'Block S - room Field',
      'description': 'Students throw ... rockets... with water...'
  },
  {
      'id': 'ac-000003',
      'image': 'https://maua.br/img/upload/banner-controle-automacao-1677511251.jpg',
      'name': 'Coding Workshop',
      'startTime': '2023/09/15 09:00:00.000',
      'endTime': '2023/09/15 12:00:00.000',
      'location': 'Block W - room W402',
      'description': 'Learn the basics of coding using Python and JavaScript.'
  },
  {
      'id': 'ac-000004',
      'image': 'https://maua.br/img/upload/matriculas-e-transferencias-1695241733.jpg',
      'name': 'Socialization Dynamic',
      'startTime': '2023/09/16 14:00:00.000',
      'endTime': '2023/09/16 18:00:00.000',
      'location': 'Block S - Gymnasium',
      'description': 'Explore the creativity of students through various activities.'
  },
  {
      'id': 'ac-000005',
      'image': 'https://maua.br/img/upload/iniciacao-cientifica-1663256113.jpg',
      'name': 'Chemistry Challenge',
      'startTime': '2023/09/17 16:00:00.000',
      'endTime': '2023/09/17 17:30:00.000',
      'location': 'Block R - room R2',
      'description': 'Engage in a friendly competition to promote knowledge and integration.'
  }
]
