import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Text,  Image, TouchableOpacity } from 'react-native';
import Activity from '../components/Activity.js';
import Menu from '../components/Menu';
import {customStyles} from '../assets/style';
import '../utils/i18n'
import { useTranslation } from 'react-i18next'
const headerImage = require('../assets/schoolmaua.jpg');
  const cardImage = require('../assets/schoolmaua.jpg');
const StudentOrganisationPage = () => {

  const {t, i18n} = useTranslation()

  const StudentOrg = [
    {
      'id': 'or-332453', 
      'image': 'https://example.com/image332453', 
      'name': 'Nawat Games', 
      'description': 'Build games ... like crazy... nonstop... Unity... breaks everything...',
    },
    {
      'id': 'or-332459', 
      'image': 'https://example.com/image332459', 
      'name': 'Bateria Mauá', 
      'description': 'Play the drums... always the... same... music in front of... Mauá...', 
    } 
  ]
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [email, setEmail] = useState('');


  const getActivities = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json',{
        header:{
          "Content-Type":"application/json"
        }
      });
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getActivities();
  }, []);
  return (
    <ScrollView>
    <View>
      <View style={""}>
        <Menu />
        <View style={customStyles.header_container}>
          <Image source={headerImage} style={customStyles.header_image} />
          <View style={customStyles.overlay_gray}>
            <Text style={customStyles.header_text}>{t("Student organisations of Maua")}</Text>
          </View>
        </View>
        <Text style={customStyles.body_text}>{t("Organisations")}</Text>
        <View style={customStyles.row_align_center}>
              <View style={""}>
                {StudentOrg.map((activity, index) => (
                  <Activity key={index} activity={activity} />
                ))}
              </View>
        </View>
      </View>
    </View>
  </ScrollView> 

  );
};

export default StudentOrganisationPage;
