import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

function MessageBox() {
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const handleSave = () => {
    console.log('Saved:', title , message);
  };

  return (
    <View>
      <Text>Enter your title here:</Text>
      <TextInput
        style={styles.text}
        placeholder="Type your title here"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text>Enter your description:</Text>
      <TextInput
        style={styles.text}
        placeholder="Type your description here"
        value={message}
        onChangeText={(text) => setMessage(text)}
      />
      <TouchableOpacity style={styles.button} title="Save" onPress={handleSave} >
      <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
    //Button
    button: {
      backgroundColor: '#095DAC',
      height: 40,
      borderRadius: 20,
      marginTop: 20,
    },
    buttonText:{
      color: 'white',
      textAlign: 'center',
      marginTop: 'auto',
      marginBottom: 'auto',
      fontSize: 16,
    },
    text:{
      fontSize: 18,
      borderBottomWidth: 2,
      marginBottom: 20,
    },
})

export default MessageBox;