import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './pages/Login'
import GoogleMaps from './pages/GoogleMaps';
import CampusMaps from './pages/CampusMaps';


export default function App() {
  return (
    <View style={styles.container}>
      <GoogleMaps/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
