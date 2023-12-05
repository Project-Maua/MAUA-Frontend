import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ActivityPage from '../pages/ActivityPage'
import AgendaPage from '../pages/AgendaPage'
import CampusMapsPage from '../pages/CampusMapsPage'
import GoogleMapsPage from '../pages/GoogleMapsPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SettingsPage from '../pages/SettingsPage'
import AboutPage from '../pages/AboutPage'
import CoursesPage from '../pages/CoursePage';
import OrginisationPage from '../pages/OrginisationPage';
import StudentOrginisationPage from '../pages/StudentOrginisationPage';
import NotificationPage from '../pages/NotificationPage';
import AddNotificationPage from '../pages/AddNotificationPage';

const Stack = createNativeStackNavigator();

//All screens must be put inside the Stack.Navigater in order to be available
const RouteSystem = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={headerStyle}>
            <Stack.Screen name="Login"                  component={LoginPage}  options={loginHeaderStyle}    />
            <Stack.Screen name="Activity"               component={ActivityPage}    />
            <Stack.Screen name="Agenda"                 component={AgendaPage}      />
            <Stack.Screen name="CampusMaps"             component={CampusMapsPage}  />
            <Stack.Screen name="GoogleMaps"             component={GoogleMapsPage}  />
            <Stack.Screen name="Home"                   component={HomePage}        />
            <Stack.Screen name="Settings"               component={SettingsPage}    />
            <Stack.Screen name="About"                  component={AboutPage}    />
            <Stack.Screen name="Courses"                component={CoursesPage}    />
            <Stack.Screen name="Orginisation"           component={OrginisationPage}    />
            <Stack.Screen name="StudentOrginisation"    component={StudentOrginisationPage}    />
            <Stack.Screen name="Notification"           component={NotificationPage}    />
            <Stack.Screen name="AddNotification"        component={AddNotificationPage}    />
        </Stack.Navigator>
    </NavigationContainer>
)

export default RouteSystem

const headerStyle = { 
    headerBackTitleVisible: false,
    headerTitle:'',
    headerTintColor: '#095DAC',
    headerStyle: { backgroundColor: 'white' },
    navigationBarColor: 'white'
}

const loginHeaderStyle = {
    headerShown: false
}