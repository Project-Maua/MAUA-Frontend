import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import MessageBox from './MessageBox';

function AddNotification() {
  const [visibleDate, setVisibleDate] = useState(false);
  const [visibleTime, setVisibleTime] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());

  const showDatePicker = () => {
    setVisibleDate(true);
  };

  const hideDatePicker = () => {
    setVisibleDate(false);
  };

  const handleDateConfirm = (date) => {
    setStartDate(date);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setVisibleTime(true);
  };

  const hideTimePicker = () => {
    setVisibleTime(false);
  };

  const handleTimeConfirm = (time) => {
    setStartTime(time);
    hideTimePicker();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.TitleText}>Create new notification</Text>
      <TouchableOpacity style={styles.button} title="Select Date" onPress={showDatePicker}>
      <Text style={styles.buttonText}>Date</Text>
      <DateTimePickerModal
        isVisible={visibleDate}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
        />
        </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Select Time" onPress={showTimePicker}>
      <Text style={styles.buttonText}>Time</Text>
      <DateTimePickerModal
        isVisible={visibleTime}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
      </TouchableOpacity>
      <MessageBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
   //Button
   button: {
    backgroundColor: '#095DAC',
    height: 40,
    borderRadius: 20,
    marginBottom: 20,
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
  TitleText: {
    fontSize: 20,
    marginBottom: 30
  }
});

export default AddNotification;
