import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Posts = ({ data }) => {
    const navigation = useNavigation();
    return (
        <View key={data.id}>
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

            <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('Details', {
                data: data
            })}>
                <View
                    style={{
                        width: '100%',
                        height: 350
                    }}
                >
                    <Image
                        src={data.image}
                        style={{ height: '100%', resizeMode: 'cover' }}
                    />
                </View>

                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={styles.postText}>{data.brand}</Text>
                    <Text style={styles.postDescription}>{data.description}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Posts

const styles = StyleSheet.create({
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
    postText:{
        marginLeft: 10,
        fontWeight: '600',
        fontSize: 16,
        paddingTop: 10, 
        marginLeft: 0 
    }
})