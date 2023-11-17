import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../pages/Login'
import GoogleMaps from '../pages/GoogleMaps'
import CampusMaps from '../pages/CampusMaps'

const Stack = createNativeStackNavigator();

//All screens must be put inside the Stack.Navigater in order to be available
const RouteSystem = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="GoogleMaps" component={GoogleMaps} options={{ title: 'Where is Maua' }} />
            <Stack.Screen name="CampusMaps" component={CampusMaps} options={{ title: 'Maua Campus' }} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default RouteSystem