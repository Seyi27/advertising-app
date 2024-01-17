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
import { SafeAreaView } from "react-native";

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Platform.OS === "ios" ? "transparent" : "white"}
      />

      <SafeAreaView style={styles.container}>

        <View style={styles.welcomeBackContainer}>
          <Text style={styles.welcomeBackText}>Welcome Back</Text>
          <Text>Enter username and password </Text>
        </View>

        {/* Input Container */}
        <View style={styles.mainInputContainer}>
          
          {/* Username */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Username</Text>
            <TextInput
              placeholder=""
              value={username}
              onChange={(text) => setUsername(text)}
              style={styles.input}
            />
          </View>

          {/* Password */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Password</Text>
            <TextInput
              placeholder=""
              value={password}
              onChange={(text) => setPassword(text)}
              secureTextEntry
              style={styles.input}
            />
          </View>

          {/* Forgot Password */}
          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </View>
        </View>

        {/* Log in Button*/}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Sign")}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        {/* Dont have an account? */}
        <View style={styles.noAccount}>
          <Text style={styles.noAccountText}>Dont have an account?</Text>
          <Text
            style={{ fontWeight: "800" }}
            onPress={() => navigation.navigate("Sign")}
          >
            {" "}
            Sign Up
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  welcomeBackContainer: {
    alignItems: "center",
    gap: 15,
    paddingVertical: 20,
  },
  welcomeBackText: {
    fontWeight: "800",
    fontSize: 18,
  },
  mainInputContainer: {
    marginBottom: 30,
  },
  inputContainer: {
    paddingVertical: 10,
    marginHorizontal: 20,
  },
  inputText: {
    fontWeight: "700",
  },
  input: {
    borderWidth: 1,
    height: 50,
    borderRadius: 7,
    marginTop: 5,
    padding: 10,
    borderColor: "gray",
    backgroundColor: "#FAFAFF",
  },
  forgotPasswordContainer: {
    marginHorizontal: 20,
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    fontWeight: "400",
    color: "#455957",
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
