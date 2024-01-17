import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome5 } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const EditDetails = ({ navigation }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null); // to store the image selected by the image picker

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Edit Profile",
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
    });
  }, []);

  // to select Image from device
  const pickImage = async () => {
    // Request permission to access the device's photo library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      // Handle permission not granted
      console.log("Permission denied");
      return;
    }

    // Launch the image picker. No permissions request is necessary for launching the image library (the permission above is optional though)
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      // Set the selected profile photo
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={styles.avatarImage}
            />
          ) : (
            <Image
              src="https://th.bing.com/th/id/OIP.gQUCjm9cRbC8JRMSMLMVXQHaLH?w=139&h=209&c=7&r=0&o=5&pid=1.7"
              style={styles.avatarImage}
            />
          )}
          <TouchableOpacity
            style={styles.editIcon}
            onPress={pickImage}
            activeOpacity={0.9}
          >
            <FontAwesome5 name="camera" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <View>
          {/* Name */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Name</Text>
            <TextInput
              placeholder="Mark Finland"
              value={name}
              onChange={(text) => setName(text)}
              style={styles.input}
            />
          </View>

          {/* Change Username */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Change Username</Text>
            <TextInput
              placeholder="MarkFinland"
              value={username}
              onChange={(text) => setUsername(text)}
              style={styles.input}
            />
          </View>

          {/* Change Bio */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Change Bio</Text>
            <TextInput
              placeholder="Account Executive, Copywriter"
              value={bio}
              onChange={(text) => setBio(text)}
              style={styles.input}
            />
          </View>

          {/* Change Password */}
          <View style={styles.inputContainer}>
            {/* Old Password */}
            <View>
              <Text style={styles.inputText}>Change Password</Text>
              <TextInput
                placeholder="Old Password"
                value={oldPassword}
                onChange={(text) => setOldPassword(text)}
                secureTextEntry
                style={styles.input}
              />
            </View>

            {/* New Password */}
            <View>
              <TextInput
                placeholder="New Password"
                value={newPassword}
                onChange={(text) => setNewPassword(text)}
                secureTextEntry
                style={styles.input}
              />
            </View>

            {/* Confirm Password */}
            <View>
              <TextInput
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(text) => setConfirmPassword(text)}
                secureTextEntry
                style={styles.input}
              />
            </View>
          </View>

          {/* Save Profile */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("EditDetails")}
          >
            <Text style={styles.buttonText}>Save Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  avatarContainer: {
    alignSelf: "center",
    position: "relative",
  },
  avatarText: {
    marginTop: 10,
    fontSize: 12,
  },
  avatarImage:{
    width: 120,
    height: 120,
    borderRadius: 100,
    position: "relative",
  },
  editIcon: {
    position: "absolute",
    bottom: 5,
    right: 0,
    backgroundColor: "#455957",
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  inputContainer: {
    marginTop: 20,
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
  inputText: {
    fontWeight: "700",
  },
  button: {
    height: 43,
    width: width / 1.5,
    backgroundColor: "#455957",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    alignSelf: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
  },
});
