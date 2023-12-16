import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";

const { width, height } = Dimensions.get("screen");

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <StatusBar
        backgroundColor="black" // Set the background color
        barStyle="light-content" // Set text and icon color
      />

      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            src="https://th.bing.com/th/id/OIP.QqL-QJoLmTBEk2wmmU-ypwHaE8?w=269&h=180&c=7&r=0&o=5&pid=1.7"
            style={{
              width: 100,
              height: 100,
              resizeMode: "cover",
              borderRadius: 50,
            }}
          />
        </View>

        <View>
          <View style={{ paddingVertical: 10 }}>
            <Text>Username</Text>
            <TextInput
              placeholder=""
              value={username}
              onChange={(text) => setUsername(text)}
              style={{
                borderWidth: 1,
                height: 40,
                borderRadius: 5,
                marginTop: 5,
                padding: 10,
                borderColor: "gray",
              }}
            />
          </View>

          <View style={{ paddingVertical: 10 }}>
            <Text>Password</Text>
            <TextInput
              placeholder=""
              value={password}
              onChange={(text) => setPassword(text)}
              style={{
                borderWidth: 1,
                height: 40,
                borderRadius: 5,
                marginTop: 5,
                padding: 10,
                borderColor: "gray",
              }}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
  },
  button: {
    height: 40,
    width: width / 3,
    backgroundColor: "black",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 20,
  },
});
