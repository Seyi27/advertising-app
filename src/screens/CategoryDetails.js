import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import Posts from "../components/Posts";
import { Divider } from "@rneui/themed";
import { Feather } from "@expo/vector-icons";

const CategoryDetails = ({ navigation, route }) => {
  const { data } = route.params;

    // Extract the category from the data array
    const categoryName = data.length > 0 ? data[0].category : '';


  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryName,
      headerTitleAlign:'center',
      headerTitleStyle: { color: '#455957' },
      headerLeft: () => (
        <View style={{ marginRight: 10 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="red" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Platform.OS === "ios" ? "transparent" : "white"}
      />
      
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            {data.map((item, index) => (
              <React.Fragment key={item.id}>
                <Posts data={item} source={"category"} />
                {index !== data.length - 1 ? (
                  <Divider style={{ marginVertical: 20 }} />
                ) : null}
              </React.Fragment>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default CategoryDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainerStyle: {
    paddingBottom: 60,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight: 10,
    backgroundColor: "white",
  },
});
