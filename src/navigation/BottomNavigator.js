import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Categories from '../screens/Categories';
import Account from '../screens/Account';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIcon: () => null,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: Platform.OS == 'ios' ? 90 : 60,
        },
        tabBarLabelStyle: {
          marginLeft: -10,
        },
        tabBarHideOnKeyboard: true
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
      />
      <Tab.Screen
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
