import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const coursesData = [
    { id: 1, image: "https://classic.exame.com/wp-content/uploads/2020/04/gettyimages-1168910967-e1587388035606.jpg?quality=70&strip=info&w=1024", name: 'Course 1', description: 'Course Description 1', duration: '4 years',  tuition:2365.00, shift:'night'},
    { id: 2, image: "https://classic.exame.com/wp-content/uploads/2020/04/gettyimages-1168910967-e1587388035606.jpg?quality=70&strip=info&w=1024", name: 'Course 2', description: 'Course Description 2', duration: '5 years',  tuition:3200.00, shift:'day'},
    { id: 3, image: "https://classic.exame.com/wp-content/uploads/2020/04/gettyimages-1168910967-e1587388035606.jpg?quality=70&strip=info&w=1024", name: 'Course 3', description: 'Course Description 3', duration: '5 years',  tuition:3250.00, shift:'night'}
];

const organizationsData = [
    { id: 1, image: "https://classic.exame.com/wp-content/uploads/2020/04/gettyimages-1168910967-e1587388035606.jpg?quality=70&strip=info&w=1024", name: 'Organizarion 1', description: 'Organization Description 1' },
    { id: 2, image: "https://classic.exame.com/wp-content/uploads/2020/04/gettyimages-1168910967-e1587388035606.jpg?quality=70&strip=info&w=1024", name: 'Organizarion 2', description: 'Organization Description 2' },
    { id: 3, image: "https://classic.exame.com/wp-content/uploads/2020/04/gettyimages-1168910967-e1587388035606.jpg?quality=70&strip=info&w=1024", name: 'Organizarion 3', description: 'Organization Description 3' }
];

const ItemDetail = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity onPress={() => setExpanded(!expanded)}>
      <View style={{ padding: 10 }}>
        <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
        <Text>{item.name}</Text>
        {expanded && <Text>{item.description}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const CoursesScreen = () => {
  return (
    <FlatList
      data={coursesData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ItemDetail item={item} />}
    />
  );
};

const OrganizationsScreen = () => {
  return (
    <FlatList
      data={organizationsData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ItemDetail item={item} />}
    />
  );
};

const AboutScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Rector: Rector name</Text>
      <Text>Vice Rector: Vice Rector name</Text>
      <Text>Description</Text>
    </View>
  );
};

// Configuração das abas de navegação
const Tab = createMaterialTopTabNavigator();

const Informations = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Courses" component={CoursesScreen} />
        <Tab.Screen name="Organizations" component={OrganizationsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Informations;
