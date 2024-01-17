import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "../screens/Details";
import BottomNavigator from "./BottomNavigator";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import CategoryDetails from "../screens/CategoryDetails";
import EditDetails from "../screens/EditDetails";
import { Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: { color: "#455957" },
          }}
        />
        <Stack.Screen
          name="Sign"
          component={SignUp}
          options={({ navigation }) => ({
            headerTitle: "Sign Up",
            headerTitleAlign: "center",
            headerTitleStyle: { color: "#455957" },
            headerLeft: () => (
              <View style={{ marginRight: 10 }}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.goBack()}
                >
                  <Feather name="arrow-left" size={24} color="red" />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
        <Stack.Screen name="EditDetails" component={EditDetails} />
        <Stack.Screen
          name="BottomTab"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
