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
        backgroundColor="black" // Set the background color
        barStyle="light-content" // Set text and icon color
      />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView style={styles.container}>
          {data.map((item, index) => (
            <>
              <Posts data={item} />
              {index !== data.length - 1 ? (
                <Divider style={{ marginVertical: 20 }} />
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
    paddingTop: 20,
    flex: 1,
  },
});
