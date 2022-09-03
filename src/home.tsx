import React from 'react'
import { Image, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo";
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.head}>
                <View
                    style={{
                        width: '20%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >

                    <View style={{
                        backgroundColor: "red",
                        width: 70,
                        height: 70,
                        borderRadius: 50
                    }}>
                        <Image
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 50,
                            }}
                            source={
                                require('./assets/user/startup-face.jpeg')
                            }
                        />

                    </View>
                </View>


                <View style={{
                    width: '70%',
                    // backgroundColor: 'green',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    padding: 10,
                }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', marginVertical: 2 }}>Luis Angel</Text>
                    </View>
                    <View>
                        <Text style={{ marginVertical: 2 }}>13 weeks ago</Text>
                    </View>
                </View>
                <View style={{ width: '10%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View style={{
                        width: 20,
                        height: 20,
                        backgroundColor: '#000',
                        marginTop: 10
                    }}>

                    </View>
                </View>
            </View>

            <View style={{
                // backgroundColor: 'pink',
                width: '90%',
                padding: 10
            }}>
                <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.💰</Text>
            </View>
            <View style={{
                // backgroundColor: 'yellow',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
            }}>
                <View style={{
                    width: 20,
                    height: 20,
                    // backgroundColor: 'blue',
                    marginLeft: 10
                }}>
                    <Entypo name="500px" size={24} color="black" />
                    <Icon name="rocket" size={30} color="#900" />
                </View>

                <Text style={{ marginHorizontal: 10 }}>30</Text>

            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        height: 90,
        width: '100%',

    }
})