import React from 'react';
import { View } from 'react-native';
import MessageBox from './MessageBox';

function AddNotification() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <View>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <MessageBox />
    </View>
  );
}

export default AddNotification;
