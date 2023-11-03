import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, ViewComponent } from 'react-native';

export default function Settings() {
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Language</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Switch mode</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>About</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>
  </View>
       
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: 300
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
