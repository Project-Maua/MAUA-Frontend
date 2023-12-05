import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddNotification from '../components/AddNotification';


const AddNotificationPage = () => {
  return (
    <SafeAreaProvider>
      <AddNotification/>
      </SafeAreaProvider>
  );
}
export default AddNotificationPage;