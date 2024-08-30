import React from 'react';
import { Text, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeS from "./screens/HomeScreen/HomeScreen.jsx";
import EventDetail from './screens/HomeScreen/EventDetails.jsx';
import CheckoutScreen from './screens/HomeScreen/CheckoutScreen.jsx';
import ThankYouScreen from './screens/HomeScreen/ThankyouScreen.jsx';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen.jsx';
import MyOrdersScreen from './screens/ProfileScreen/MyOrdersScreen.jsx';
import SettingsScreen from './screens/ProfileScreen/SettingsScreen.jsx';
import AboutScreen from './screens/ProfileScreen/AboutScreen.jsx';
import HelpScreen from './screens/ProfileScreen/HelpScreen.jsx';
import SplashScreen from './screens/SplashScreen.jsx';
import MapScreen from './screens/MapScreen/MapScreen.js';
import EditProfile from './screens/ProfileScreen/EditProfile.jsx';
import Login from './components/Login.js';
import OtpScreen from './screens/HomeScreen/OtpScreen.jsx';
import withBackground from './withBackground';
import Colors from './utils/Colors.js';
import Terms from './screens/ProfileScreen/TermsScreen.jsx';
import Privacy from './screens/ProfileScreen/PrivacyScreen.jsx';
import SelectLocation from './screens/MapScreen/SelectLocation.js';
import ReportSafetyIssue from './screens/ProfileScreen/ReportSafetyIssue.jsx';
import OrderDetailsScreen from './screens/ProfileScreen/OrderDetailsScreen.jsx';
import Signup from './components/Signup.js';
import WelcomeLoginScreen from './screens/LoginScreen/WelcomeLogin.jsx';
import MapForm from './screens/MapScreen/MapForm.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{ 
       headerShown: false,
       tabBarActiveTintColor: Colors.WHITE,
       tabBarStyle: {
         position: 'fixed',
         height: 65,
         bottom: 12,
         left: '5%',  // Use percentages instead of vw
         right: '5%', // Use percentages instead of vw
         backgroundColor: '#503a73',
         borderRadius: 35,
         width: '90%', // Use percentages instead of vw
         padding: 8,
         
       },
       tabBarLabelStyle: {
         color: 'white',
         display: 'none',
       }
      }} 
  >
    <Tab.Screen
      name="HomeScreen"
      component={withBackground(HomeS)}
      options={{
        headerShown: false,
        // tabBarLabel: ({ color }) => (
        //   <Text style={{ color: color, fontSize: 12 }}>{color === Colors.PRIMARY ? 'Home' : 'Home'}</Text>
        // ),
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('./assets/chefHeaven/home.png')}
            style={{ width: 36, height: 36, tintColor: color }}
          />
        )
      }}
    />
    <Tab.Screen
      name="MyOrders"
      component={withBackground(MyOrdersScreen)}
      options={{
        headerShown: false,
        // tabBarLabel: ({ color }) => (
        //   <Text style={{ color: color, fontSize: 12 }}>{color === Colors.PRIMARY ? 'My Orders' : 'My Orders'}</Text>
        // ),
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('./assets/chefHeaven/myorder.png')}
            style={{ width: 34, height: 34, tintColor: color }}
          />
        )
      }}
    />
    <Tab.Screen
      name="Profile"
      component={withBackground(ProfileScreen)}
      options={{
        headerShown: false,
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('./assets/836.png')}
            style={{ width: 34, height: 34 }}
          />
        )
      }}
    />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={withBackground(SplashScreen)} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={withBackground(WelcomeScreen)} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="EventDetail" component={withBackground(EventDetail)} options={{ title: 'Event Detail' }} />
        <Stack.Screen name="CheckoutScreen" component={withBackground(CheckoutScreen)} />
        <Stack.Screen name="ThankyouDetails" component={withBackground(ThankYouScreen)} options={{ title: 'Thankyou' }} />
        <Stack.Screen name="Profile" component={withBackground(ProfileScreen)}   options={{headerShown: true}} />
        <Stack.Screen name="MyOrders" component={withBackground(MyOrdersScreen)} options={{ headerShown: true }} />
        <Stack.Screen name="Settings" component={withBackground(SettingsScreen)} options={{ headerShown: true }} />
        <Stack.Screen name="About" component={withBackground(AboutScreen)} options={{ headerShown: true }} />
        <Stack.Screen name="Terms" component={withBackground(Terms)} options={{ headerShown: true }} />
        <Stack.Screen name="Privacy" component={withBackground(Privacy)} options={{ headerShown: true }} />
        <Stack.Screen name="Help" component={withBackground(HelpScreen)} options={{ headerShown: true }} />
        <Stack.Screen name="Map" component={withBackground(MapScreen)} />
        <Stack.Screen name="SelectLocation" component={SelectLocation} />
        <Stack.Screen name="EditProfile" component={withBackground(EditProfile)} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="ReportSafetyIssue" component={ReportSafetyIssue} />
        <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
        <Stack.Screen name="WelcomeLoginScreen" component={WelcomeLoginScreen} />
        <Stack.Screen name="MapForm" component={MapForm} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
