import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Categories from "../screens/Categories";
import Account from "../screens/Account";
import { Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#455957" },
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name="home"
                size={24}
                color={focused ? "#455957" : "black"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#455957" },
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons
                name="category"
                size={24}
                color={focused ? "#455957" : "black"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle:{
           color:'#455957'
          },
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome
                name="user"
                size={24}
                color={focused ? "#455957" : "black"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
