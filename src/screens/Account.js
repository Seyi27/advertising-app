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
} from "react-native";
import React from "react";
import { Divider } from "@rneui/base";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign } from "@expo/vector-icons";

const Account = () => {
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.avatarContainer}>
          <Image
            src="https://th.bing.com/th/id/OIP.gQUCjm9cRbC8JRMSMLMVXQHaLH?w=139&h=209&c=7&r=0&o=5&pid=1.7"
            style={{
              width: 100,
              height: 100,
              resizeMode: "cover",
              borderRadius: 50,
            }}
          />
          <Text style={styles.avatarText}>John Doe</Text>
        </View>

        <Divider style={{ paddingVertical: 10 }} />

        <View>
          {/* Bio */}
          <View style={{ paddingVertical: 10 }}>
            <Text>Bio</Text>
            <TextInput
              placeholder="Bio"
              value={bio}
              onChange={(text) => setBio(text)}
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

          <Divider style={{ paddingVertical: 10 }} />

          {/* Change Password */}
          <View style={{ paddingVertical: 10 }}>
            <Text>Change Password</Text>
            <TextInput
              placeholder="Password"
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

          {/* Confirm Password */}
          <View style={{ paddingVertical: 5 }}>
            <TextInput
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(text) => setConfirmPassword(text)}
              style={{
                borderWidth: 1,
                height: 40,
                borderRadius: 5,
                padding: 10,
                borderColor: "gray",
              }}
            />
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.floatButton}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    paddingHorizontal: 20,
    paddingTop: Platform.OS == "ios" ? 40 : 10,
    position: "relative",
  },
  avatarContainer: {
    alignItems: "center",
    paddingTop: 30,
  },
  avatarText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  floatButton: {
    height: 60,
    width: 60,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
