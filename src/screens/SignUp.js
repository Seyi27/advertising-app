import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const { width, height } = Dimensions.get("screen");

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Platform.OS === "ios" ? "transparent" : "white"}
      />

      <SafeAreaView style={styles.container}>

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

          {/* Confirm Password */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Confirm Password</Text>
            <TextInput
              placeholder=""
              value={confirmPassword}
              onChange={(text) => setConfirmPassword(text)}
              secureTextEntry
              style={styles.input}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("BottomTab")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.noAccount}>
          <Text style={styles.noAccountText}>Already have an account?</Text>
          <Text
            style={styles.logInText}
            onPress={() => navigation.goBack()}
          >
            {" "}
            Log In
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  mainInputContainer: {
    marginVertical: 30,
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
  logInText: {
    fontWeight: "800",
  },
});
