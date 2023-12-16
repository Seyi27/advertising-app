import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import React from "react";
import { Platform } from "react-native";

const { width, height } = Dimensions.get("screen");

const Categories = () => {
  return (
    <>
      <StatusBar
        backgroundColor="black" // Set the background color
        barStyle="light-content" // Set text and icon color
      />

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Categories</Text>
        </View>

        <View style={styles.containerBody}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingVertical: 10,
            }}
          >
            <TouchableOpacity
              style={styles.containerBodyItem}
              activeOpacity={Platform.OS == "ios" ? 0.5 : 0.8}
            >
              <Text>Electronics</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.containerBodyItem}
              activeOpacity={Platform.OS == "ios" ? 0.5 : 0.8}
            >
              <Text>Clothing</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingVertical: 10,
            }}
          >
            <TouchableOpacity
              style={styles.containerBodyItem}
              activeOpacity={Platform.OS == "ios" ? 0.5 : 0.8}
            >
              <Text>Books</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.containerBodyItem}
              activeOpacity={Platform.OS == "ios" ? 0.5 : 0.8}
            >
              <Text>Home & Garden</Text>
            </TouchableOpacity>
          </View>

          <View style={{ paddingVertical: 10 }}>
            <TouchableOpacity
              style={styles.containerBodyItemWidth}
              activeOpacity={Platform.OS == "ios" ? 0.5 : 0.8}
            >
              <Text>Sports & Outdoors</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
    paddingTop: Platform.OS == "ios" ? 40 : 10,
  },
  header: {
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
  },
  containerBody: {
    width: "100%",
  },
  containerBodyItem: {
    width: width / 2.3,
    height: height / 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "white",
    ...Platform.select({
      android: {
        elevation: 9, // Android shadow
      },
      ios: {
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    }),
  },
  containerBodyItemWidth: {
    width: "100%",
    height: height / 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "white",
    ...Platform.select({
      android: {
        elevation: 9, // Android shadow
      },
      ios: {
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    }),
  },
});
