import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const Details = ({ route, navigation }) => {
  const { data, source } = route.params;
  console.log(data);

  // Define the number of rows and columns in the grid
  const numRows = 3;
  const numColumns = 2;

  // Create the grid using nested loops
  const renderGrid = () => {
    const grid = [];
    for (let i = 0; i < numRows; i++) {
      const row = [];
      for (let j = 0; j < numColumns; j++) {
        row.push(
          <Image
            key={`image_${i}_${j}`}
            src={data.image}
            style={styles.image}
          />
        );
      }
      grid.push(
        <View key={`row_${i}`} style={styles.row}>
          {row}
        </View>
      );
    }
    return grid;
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Platform.OS === "ios" ? "transparent" : "white"}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* back button */}
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Feather name="arrow-left" size={24} color="red" />
          </TouchableOpacity>

          <View style={styles.postHeader}>
            {source === "home" ? (
              <Image
                src="https://th.bing.com/th/id/OIP.gQUCjm9cRbC8JRMSMLMVXQHaLH?w=139&h=209&c=7&r=0&o=5&pid=1.7"
                style={styles.postAvatarImage}
              />
            ) : null}

            <Text
              style={[
                styles.postHeaderText,
                source === "home" ? { marginLeft: 10 } : { marginLeft: 0 },
              ]}
            >
              {data.name}
            </Text>
          </View>

          <View style={styles.postDescriptionContainer}>
            <Text style={styles.postDescription}>{data.description}</Text>
          </View>

          <View style={styles.gridContainer}>{renderGrid()}</View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "white",
  },
  backButton: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  postAvatarImage:{
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 50,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  postHeaderText: {
    fontWeight: "600",
    fontSize: 20,
  },
  postText: {
    marginLeft: 10,
    fontWeight: "500",
    fontSize: 16,
    paddingTop: 10,
    marginLeft: 0,
  },
  postDescriptionContainer: {
    paddingHorizontal: 20,
  },
  gridContainer: {
    width: width,
    flex: 1,
    marginTop: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: width / 2,
    height: height / 4.2,
  },
  row: {
    flexDirection: "row",
  },
});
