import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Stories = () => {

    const storyInfo = [
        {
            id: 1,
            name: 'Your Story',
            image: "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662308282/OnlyPost/user.jpg",
        },
        {
            id: 0,
            name: 'Alice Cullen',
            image: "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662343676/OnlyPost/user12.jpg",

        },
        {
            id: 0,
            name: 'Stephanie Cayo',
            image: "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662310840/OnlyPost/user2.jpg",
        },
        {
            id: 0,
            name: 'Bella Swan',
            image: "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662311671/OnlyPost/user1.jpg",

        },
        {
            id: 0,
            name: 'Michael J Fox',
            image: "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662310994/OnlyPost/user6.jpg",

        },
        ,
        {
            id: 0,
            name: 'Tobey Maguirre',
            image: "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662311578/OnlyPost/user9.jpg",

        },
        ,
        {
            id: 0,
            name: 'Taylor Lautner',
            image: "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662343594/OnlyPost/user11.jpg",

        }


    ];

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingVertical: 20, }}>
            {storyInfo.map((data, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() =>
                            console.log('first')
                        }>
                        <View
                            style={{
                                flexDirection: 'column',
                                paddingHorizontal: 8,
                                position: 'relative',
                            }}>
                            {data?.id == 1 ? (
                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: 15,
                                        right: 10,
                                        zIndex: 1,
                                    }}>
                                    <Entypo
                                        name="circle-with-plus"
                                        style={{
                                            fontSize: 20,
                                            color: '#405de6',
                                            backgroundColor: 'white',
                                            borderRadius: 100,
                                        }}
                                    />
                                </View>
                            ) : null}
                            <View
                                style={{
                                    width: 60,
                                    height: 60,
                                    backgroundColor: 'white',
                                    borderWidth: 1.8,
                                    borderRadius: 100,
                                    borderColor: '#c13584',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Image
                                    source={{ uri: data?.image }}
                                    style={{
                                        resizeMode: 'cover',
                                        width: '92%',
                                        height: '92%',
                                        borderRadius: 100,
                                        backgroundColor: 'orange',
                                    }}
                                />
                            </View>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 10,
                                    opacity: data?.id ? 1 : 0.5,
                                }}>
                                {data?.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
};

export default Stories;
