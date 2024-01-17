import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import Posts from "../components/Posts";
import { data } from "../components/data";
import { Divider } from "@rneui/themed";

const Home = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Platform.OS === "ios" ? "transparent" : "white"}
      />

      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView style={styles.container}>
          {data.map((item, index) => (
            <>
              <Posts data={item} source={'home'} />
              {index !== data.length - 1 ? (
                <Divider style={styles.divider} />
              ) : null}
            </>
          ))}
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainerStyle: {
    paddingBottom: 60,
    paddingTop: 20,
    backgroundColor: "white",
  },
  divider:{
    marginVertical: 20
  }
});
