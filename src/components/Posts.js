import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Posts = ({ data, source }) => {
  const navigation = useNavigation();
  return (
    <View key={data.id}>
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

      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          navigation.navigate("Details", {
            data: data,
            source: source,
          })
        }
      >
        <View
          style={styles.imageContainer}
        >
          <Image
            src={data.image}
            style={styles.image}
          />
        </View>

        <View style={styles.postTextContentContainer}>
          <Text style={styles.postText}>{data.brand}</Text>
          <Text style={styles.postDescription}>{data.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  postHeaderText: {
    fontWeight: "600",
    fontSize: 17,
  },
  postAvatarImage:{
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 50,
  },
  postTextContentContainer:{
    paddingHorizontal: 20
  },
  postText: {
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 16,
    paddingTop: 10,
    marginLeft: 0,
  },
  imageContainer:{
    width: "100%",
    height: 350,
  },
  image:{
    height: "100%", 
    resizeMode: "cover"
  }
});
