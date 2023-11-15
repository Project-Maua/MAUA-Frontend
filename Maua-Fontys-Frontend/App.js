import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './pages/Login'
import Home from './pages/Home'
import ActivityPage from './pages/ActivityPage'
import Agenda from './pages/Agenda'

export default function App() {
  return (
    <View style={styles.container}>
      <Agenda/>
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
