import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ name }) => {
  const navigation = useNavigation();
  return (
    <View>
      {name == "Sign Up" ? (
        <View style={styles.header}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerText}>{name}</Text>
          <Text>{"    "}</Text>
        </View>
      ) : (
        <View style={styles.headerSecond}>
          <Text style={[styles.headerText, { textAlign: "center" }]}>
            {name}
          </Text>
        </View>
      )}
    </View>

    // <View style={styles.header}>
    //   <AntDesign
    //     name="arrowleft"
    //     size={24}
    //     color="black"
    //     onPress={() => navigation.goBack()}
    //   />
    //   <View>
    //     <Text style={styles.headerText}>{name}</Text>
    //   </View>
    // </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerSecond: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerText: {
    color: "#455957",
    fontWeight: "600",
    fontSize: 20,
  },
});
