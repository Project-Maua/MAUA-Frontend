import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import Activity from '../components/Activity.js';
import {customStyles} from '../assets/style';
import '../utils/i18n'
import { useTranslation } from 'react-i18next'
import Constants from '../utils/Constants.js';

const headerImage = require('../assets/schoolmaua.jpg');
const title = "Welcome!";
const message = "This is a sample card box in React Native.";
const cardImage = require('../assets/schoolmaua.jpg');
const ActivityPage = ({}) => {
  const {t, i18n} = useTranslation()
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getActivities = async () => {
    try {
      const response = await fetch(Constants.activities_url, {
        header:{
          "Content-Type":"application/json"
        }
      });
      const json = await response.json();
      setData(json);
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

        <View style={customStyles.header_container}>
          <Image source={headerImage} style={customStyles.header_image} />
          <View style={customStyles.overlay_gray}>
            <Text style={customStyles.header_text}>{t("University of Technology Maua")}</Text>
          </View>
        </View>
        <Text style={customStyles.body_text}>{t("University Activities")}</Text>
        <View style={customStyles.row_align_center}>
              <View style={""}>
                {data.map((activity, index) => (
                  <Activity key={index} activity={activity} />
                ))}
              </View>
        </View>
    </View>
  </ScrollView> 

  );
};

export default ActivityPage;
