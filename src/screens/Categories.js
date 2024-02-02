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
import {
  booksData,
  clothesData,
  electronicsData,
  homeGardenData,
  sportsOutdoorData,
} from "../components/data";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get("screen");

const Categories = ({ navigation }) => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Platform.OS === "ios" ? "transparent" : "white"}
      />

      <View style={styles.container}>
        <View style={styles.containerBody}>
          {/* Row */}
          <View style={styles.row}>
            {/* Electronics */}
            <TouchableOpacity
              style={styles.containerBodyItem}
              activeOpacity={Platform.OS == "ios" ? 0.5 : 0.8}
              onPress={() =>
                navigation.navigate("CategoryDetails", {
                  data: electronicsData,
                })
              }
            >
              <FontAwesome name="tv" size={24} color="black" />
              <Text>Electronics</Text>
            </TouchableOpacity>

            {/* Clothing */}
            <TouchableOpacity
              style={styles.containerBodyItem}
              activeOpacity={Platform.OS == "ios" ? 0.5 : 0.8}
              onPress={() =>
                navigation.navigate("CategoryDetails", {
                  data: clothesData,
                })
              }
            >
              <Ionicons name="shirt-outline" size={24} color="black" />
              <Text>Clothing</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            {/* Books */}
            <TouchableOpacity
              style={styles.containerBodyItem}
              activeOpacity={Platform.OS == "ios" ? 0.5 : 0.8}
              onPress={() =>
                navigation.navigate("CategoryDetails", {
                  data: booksData,
                })
              }
            >
              <FontAwesome name="book" size={24} color="black" />
              <Text>Books</Text>
            </TouchableOpacity>

            {/* Home & Garden */}
            <TouchableOpacity
              style={styles.containerBodyItem}
              activeOpacity={Platform.OS == "ios" ? 0.5 : 0.8}
              onPress={() =>
                navigation.navigate("CategoryDetails", {
                  data: homeGardenData,
                })
              }
            >
<MaterialCommunityIcons name="sofa" size={24} color="black" />
              <Text>Home & Garden</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerTop}>
            {/* Sports & Outdoors */}
            <TouchableOpacity
              style={styles.containerBodyItemWidth}
              activeOpacity={Platform.OS == "ios" ? 0.5 : 0.8}
              onPress={() =>
                navigation.navigate("CategoryDetails", {
                  data: sportsOutdoorData,
                })
              }
            >
              <Ionicons name="football" size={24} color="black" />
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
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  containerBody: {
    width: "100%",
  },
  containerBodyItem: {
    width: width / 2.3,
    height: height / 12,
    gap:5,
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
  containerTop: {
    paddingVertical: 10,
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
