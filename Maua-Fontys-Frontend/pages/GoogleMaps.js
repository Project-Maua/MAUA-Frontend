
import React, { Component } from 'react';
import { View, StyleSheet, Button, Linking } from 'react-native';
// Adicionar essa linha
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const url = 'https://www.google.com/maps/place/Instituto+Mauá+de+Tecnologia/@-23.6480707,-46.5732959,16z/data=!4m6!3m5!1s0x94ce434992a4cad7:0x75aa65b7b5099c2!8m2!3d-23.647955!4d-46.574245!16s%2Fm%2F0nd4yst?ent';

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: window.height,
   width: window.width,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

const GoogleMaps = () => (
   <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: -23.647955,
         longitude:-46.574245,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
         <Marker
            coordinate={{
              latitude: -23.647955,
              longitude:-46.574245,
            }}
            title={"title"}
            description={"description"}
         />
     </MapView>
     <Button title="Go to Mauá" onPress={() => Linking.openURL(url)} />
   </View>
);

export default GoogleMaps