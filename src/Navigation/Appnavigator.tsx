import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from './Rootstack';
import Home from '../screens/Botoomtabpages/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Order from '../screens/Botoomtabpages/Order';
import Notificaion from '../screens/Botoomtabpages/Notification';
import Profile from '../screens/Botoomtabpages/Profile';
import {Image, StyleSheet} from 'react-native';
import Appimages from '../Theme/Appimages';
import Utils from '../common/utils';
import Splashscreen from '../screens/Splashscreen';
import Signin from '../screens/Signin';
import Login from '../screens/Login.tsx';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();
const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splashscreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Splashscreen"
        component={Splashscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Signup" component={Signupnavigator} />

      <Stack.Screen name="Bottom" component={BottomTabs} />

    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'blue',
      }}>
      <Tab.Screen
        name="HomeStackNavigation"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: () => {
            return <Image style={styles.img} source={Appimages.Home} />;
          },
        }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarIcon: () => {
            return <Image style={styles.img} source={Appimages.order} />;
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notificaion}
        options={{
          tabBarIcon: () => {
            return <Image style={styles.img} source={Appimages.notification} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => {
            return <Image style={styles.img} source={Appimages.profile} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Signupnavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  img: {width: Utils.widthScaleSize(24), height: Utils.heightScaleSize(24)},
});
