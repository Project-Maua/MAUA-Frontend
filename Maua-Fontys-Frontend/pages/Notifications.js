import React from 'react';
import { View } from 'react-native';
import CardBox from './CardBox';
const Notifications = () => {
    const handleButtonPress = () => {
      console.log('Button pressed');
    };


  return (
    <View style={styles.container}>
    <Card
      title="Title Card"
      text="This is a sample card with a title, text, and a button."
      buttonText="Click Me"
      onPressButton={handleButtonPress}
    />
  </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Notifications;