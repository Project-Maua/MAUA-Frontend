import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ActivityPage from '../pages/ActivityPage'
import AgendaPage from '../pages/AgendaPage'
import CampusMapsPage from '../pages/CampusMapsPage'
import GoogleMapsPage from '../pages/GoogleMapsPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SettingsPage from '../pages/SettingsPage'
import Informations from '../pages/Informations'

const Stack = createNativeStackNavigator();

//All screens must be put inside the Stack.Navigater in order to be available
const RouteSystem = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Activity"       component={ActivityPage}    />
            <Stack.Screen name="Agenda"         component={AgendaPage}      />
            <Stack.Screen name="CampusMaps"     component={CampusMapsPage}  />
            <Stack.Screen name="GoogleMaps"     component={GoogleMapsPage}  />
            <Stack.Screen name="Home"           component={HomePage}        />
            <Stack.Screen name="Login"          component={LoginPage}       />
            <Stack.Screen name="Settings"       component={SettingsPage}    />
            <Stack.Screen name="Informations"   component={Informations}    />
        </Stack.Navigator>
    </NavigationContainer>
)

export default RouteSystem