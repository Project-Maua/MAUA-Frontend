import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddNotification from '../components/AddNotification';
import Menu from '../components/Menu';

const AddNotificationPage = () => {
  return (
    <SafeAreaProvider>
      <Menu></Menu>
      <AddNotification/>
      </SafeAreaProvider>
  );
}
export default AddNotificationPage;