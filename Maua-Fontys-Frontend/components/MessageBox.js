import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

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
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        placeholder="Type your title here"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text>Enter your message:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        placeholder="Type your message here"
        value={message}
        onChangeText={(text) => setMessage(text)}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}

export default MessageBox;