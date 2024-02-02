import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StatusBar
} from "react-native";
import React from "react";
import { useState } from "react";


const { width, height } = Dimensions.get("screen");

const Account = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.avatarContainer}>
          <Image
            src="https://th.bing.com/th/id/OIP.gQUCjm9cRbC8JRMSMLMVXQHaLH?w=139&h=209&c=7&r=0&o=5&pid=1.7"
            style={styles.avatarImage}
          />
          <Text style={styles.avatarText}>John Doe</Text>
        </View>

        <View>
          {/* Username */}
          <View style={styles.usernameInputTop}>
            <Text style={styles.inputText}>Username</Text>
            <TextInput
              placeholder="Username"
              value={username}
              onChange={(text) => setUsername(text)}
              style={styles.input}
            />
          </View>

          {/* Bio */}
          <View style={styles.bioInputTop}>
            <Text style={styles.inputText}>Bio</Text>
            <TextInput
              placeholder="Bio"
              value={bio}
              onChange={(text) => setBio(text)}
              style={styles.input}
            />
          </View>
        </View>

        {/* Edit Profile */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("EditDetails")}
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>

        {/* Log out */}
          <TouchableOpacity style={styles.buttonLogOut}>
            <Text style={styles.buttonLogOutText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight: 40,
    position: "relative",
  },
  avatarContainer: {
    alignItems: "center",
  },
  avatarText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  avatarImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 50,
  },
  usernameInputTop: {
    paddingVertical: 10,
  },
  bioInputTop: {
    paddingVertical: 5,
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
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  button: {
    height: 43,
    width: width / 1.5,
    backgroundColor: "#455957",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
  },
  buttonLogOutText: {
    color: "red",
    fontWeight: "500",
  },
});
