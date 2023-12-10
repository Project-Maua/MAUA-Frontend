import React, { useState } from 'react'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import {customStyles} from '../assets/style'
import '../utils/i18n'
import { useTranslation } from 'react-i18next'
import OrganizationPage from './OrganizationPage.js'
import CoursePage from './CoursePage.js'
import AboutPage from './AboutPage.js'

const Tabs = {
  courses: "courses",
  organizations: "organizations",
  about: "about"
}

const MenuACOPage = ({ navigation }) => {
  const {t, i18n} = useTranslation()
  const [currentTab, setTab] = useState(Tabs.about)

    const handleCourses = () => {
        setTab(Tabs.courses)
    }
    const handleAbout = () => {
        setTab(Tabs.about)
    }
    const handleOrganization = () => {
        setTab(Tabs.organizations)
    }

    const getButtonStyle = (buttonTab) => {
      return (buttonTab == currentTab ? 
        customStyles.button_active : 
        customStyles.button)
    }

    const getButtonTextStyle = (buttonTab) => {
      return (buttonTab == currentTab ? 
        customStyles.button_active_text : 
        customStyles.button_text)
    }

    const getCurrentPage = () => {
        switch(currentTab)
        {
          case Tabs.about:
            return <AboutPage/>
          case Tabs.courses:
            return <CoursePage/>
          case Tabs.organizations:
            return <OrganizationPage/>
        }
    }
  
  return (
    <ScrollView>
      <View style={""}>
        <View style={customStyles.topbar}>
            <TouchableOpacity style={getButtonStyle(Tabs.about)} onPress={handleAbout} >
                <Text style={getButtonTextStyle(Tabs.about)}>{t("About")}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={getButtonStyle(Tabs.courses)} onPress={handleCourses}>
                <Text style={getButtonTextStyle(Tabs.courses)}>{t("Courses")}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={getButtonStyle(Tabs.organizations)} onPress={handleOrganization}>
                <Text style={getButtonTextStyle(Tabs.organizations)}>{t("Organization")}</Text>
            </TouchableOpacity>
        </View>
        
        {getCurrentPage()}

    </View>
  </ScrollView> 

  )
}

export default MenuACOPage