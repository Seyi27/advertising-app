import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import Header from "../components/Header";
import { SafeAreaView } from "react-native";

const { width, height } = Dimensions.get("screen");

const Login = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <StatusBar
        backgroundColor="black" // Set the background color
        barStyle="light-content" // Set text and icon color
      />

      <SafeAreaView style={styles.container}>
        <Header name="Login" />
        {/* <View style={styles.logoContainer}>
          <Image
            src="https://th.bing.com/th/id/OIP.QqL-QJoLmTBEk2wmmU-ypwHaE8?w=269&h=180&c=7&r=0&o=5&pid=1.7"
            style={{
              width: 100,
              height: 100,
              resizeMode: "cover",
              borderRadius: 50,
            }}
          />
        </View> */}

        <View style={{alignItems:'center', gap:15, paddingVertical:20}}>
          <Text style={{ fontWeight: "800", fontSize:18 }}>Welcome Back</Text>
          <Text>Enter username and password </Text>
        </View>

        <View style={{marginBottom:30}}>
          <View style={{ paddingVertical: 10, marginHorizontal: 20 }}>
            <Text style={styles.inputText}>Username</Text>
            <TextInput
              placeholder=""
              value={username}
              onChange={(text) => setUsername(text)}
              style={{
                borderWidth: 1,
                height: 50,
                borderRadius: 7,
                marginTop: 5,
                padding: 10,
                borderColor: "gray",
                backgroundColor:'#FAFAFF'
              }}
            />
          </View>

          <View style={{ paddingVertical: 10, marginHorizontal: 20 }}>
            <Text style={styles.inputText}>Password</Text>
            <TextInput
              placeholder=""
              value={password}
              onChange={(text) => setPassword(text)}
              secureTextEntry
              style={{
                borderWidth: 1,
                height: 50,
                borderRadius: 7,
                marginTop: 5,
                padding: 10,
                borderColor: "gray",
                backgroundColor:'#FAFAFF'
              }}
            />
          </View>

          <View style={{ marginHorizontal: 20, alignItems: "flex-end" }}>
            <Text style={{ fontWeight: "400", color: "#455957" }}>
              Forgot Password?
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Sign')}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <View style={styles.noAccount}>
          <Text style={styles.noAccountText}>Dont have an account?</Text>
          <Text style={{ fontWeight: "800" }} onPress={()=>navigation.navigate('Sign')}>  Sign Up</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  logoContainer: {
    alignSelf: "center",
  },
  inputText: {
    fontWeight: "700",
  },
  noAccount: {
    flexDirection: "row",
    alignSelf: "center",
  },
  noAccountText: {},
  buttonText: {
    color: "white",
    fontWeight: "500",
  },
  button: {
    height: 43,
    width: width / 1.5,
    backgroundColor: "#455957",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 20,
  },
});
