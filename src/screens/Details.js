import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native';

const Details = ({ route }) => {
    const { data } = route.params;
    console.log(data)
    return (
        <>
            <StatusBar
                backgroundColor="black" // Set the background color
                barStyle="light-content" // Set text and icon color
            />

            <SafeAreaView style={styles.container}>
                <View style={styles.postHeader}>
                    <Image
                        src='https://th.bing.com/th/id/OIP.gQUCjm9cRbC8JRMSMLMVXQHaLH?w=139&h=209&c=7&r=0&o=5&pid=1.7'
                        style={{
                            width: 50,
                            height: 50,
                            resizeMode: 'cover',
                            borderRadius: 50
                        }}
                    />
                    <Text style={styles.postHeaderText}>{data.brand}</Text>
                </View>

                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={styles.postText}>{data.brand}</Text>
                    <Text style={styles.postDescription}>{data.description}</Text>
                </View>

                <View
                    style={{
                        width: '100%',
                        flex: 1,
                        marginTop: 20
                    }}
                >
                    <Image
                        src={data.image}
                        style={{ height: '100%', resizeMode: 'repeat' }}
                    />
                </View>
            </SafeAreaView>
        </>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 10
    },
    postHeaderText: {
        marginLeft: 10,
        fontWeight: '600',
        fontSize: 20
    },
    postText: {
        marginLeft: 10,
        fontWeight: '500',
        fontSize: 16,
        paddingTop: 10,
        marginLeft: 0
    }
})