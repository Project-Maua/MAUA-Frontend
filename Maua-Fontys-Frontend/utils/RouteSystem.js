import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ActivityPage from '../pages/ActivityPage'
import AgendaPage from '../pages/AgendaPage'
import CampusMapsPage from '../pages/CampusMapsPage'
import GoogleMapsPage from '../pages/GoogleMapsPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SettingsPage from '../pages/SettingsPage'
import StudentOrganisationPage from '../pages/StudentOrganisationPage';
import NotificationPage from '../pages/NotificationPage';
import AddNotificationPage from '../pages/AddNotificationPage';
import { TouchableOpacity} from 'react-native';
import { HeaderButtons } from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/FontAwesome';
import MauaLogo from '../components/MauaLogo'
import MenuACOPage from '../pages/MenuAboutCoursesOrganizations'

const Stack = createNativeStackNavigator();

//All screens must be put inside the Stack.Navigater in order to be available
const RouteSystem = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={headerConfiguration}>
            <Stack.Screen name="Login"               component={LoginPage}  options={ {headerShown: false }} />
            <Stack.Screen name="Activity"            component={ActivityPage}            />
            <Stack.Screen name="Agenda"              component={AgendaPage}              />
            <Stack.Screen name="CampusMaps"          component={CampusMapsPage}          />
            <Stack.Screen name="GoogleMaps"          component={GoogleMapsPage}          />
            <Stack.Screen name="Home"                component={HomePage}                />
            <Stack.Screen name="Settings"            component={SettingsPage}            />
            <Stack.Screen name="StudentOrganisation" component={StudentOrganisationPage} />
            <Stack.Screen name="Notification"        component={NotificationPage}        />
            <Stack.Screen name="AddNotification"     component={AddNotificationPage}     />
            <Stack.Screen name="MenuACOPage"         component={MenuACOPage}             />
        </Stack.Navigator>
    </NavigationContainer>
)

const headerConfiguration = ({navigation}) => ({ 
    headerBackTitleVisible: false,
    headerTitle: () => (<MauaLogo/>),
    headerTitleAlign: 'center',
    headerTintColor: '#095DAC',
    headerRight: () => (<RightButtons navigation={navigation}/>)
})

//Header Components
const RightButtons = ({ navigation }) => (
    <HeaderButtons>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Icon name="gear" size={25} color="#095DAC"/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Icon name="bell" size={25} color="#095DAC" />
        </TouchableOpacity>
    </HeaderButtons>
)

export default RouteSystem