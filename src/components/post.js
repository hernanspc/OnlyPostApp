import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Post = () => {
    const postData = [
        {
            postTitle: 'Luis Angel',
            postPersonImage: require('../assets/images/profile2.jpg'),
            postImage: require('../assets/images/post10.jpg'),
            likes: 765,
            isLiked: false,
        },
        {
            postTitle: 'Mark Zuckerberg',
            postPersonImage: require('../assets/images/profile1.jpg'),
            postImage: require('../assets/images/post2.jpg'),
            likes: 345,
            isLiked: false,
        },
        {
            postTitle: 'Tomy',
            postPersonImage: require('../assets/images/profile2.jpg'),
            postImage: require('../assets/images/post5.jpg'),
            likes: 734,
            isLiked: false,
        },
        {
            postTitle: 'Alvaro',
            postPersonImage: require('../assets/images/profile1.jpg'),
            postImage: require('../assets/images/post4.jpg'),
            likes: 875,
            isLiked: false,
        },
    ];

    return (
        <View>
            {postData.map((data, index) => {
                const [like, setLike] = useState(data.isLiked);
                return (
                    <View
                        key={index}
                        style={{
                            paddingBottom: 10,
                            borderBottomColor: 'gray',
                            borderBottomWidth: 0.1,
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 15,
                            }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={data.postPersonImage}
                                    style={{ width: 40, height: 40, borderRadius: 100 }}
                                />
                                <View style={{ paddingLeft: 5 }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                                        {data.postTitle}
                                    </Text>

                                    <Text style={{ fontSize: 13, color: "#B0B0B0" }}>13 weeks ago</Text>
                                </View>
                            </View>
                            <Feather name="more-vertical" style={{ fontSize: 20 }} />
                        </View>
                        <View
                            style={{
                                position: 'relative',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Image
                                source={data.postImage}
                                style={{ width: '85%', height: 200 }}
                            />
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingHorizontal: 12,
                                paddingVertical: 15,
                            }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => setLike(!like)}>
                                    <AntDesign
                                        name={like ? 'heart' : 'hearto'}
                                        style={{
                                            paddingRight: 10,
                                            fontSize: 20,
                                            color: like ? 'red' : 'black',
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionic
                                        name="ios-chatbubble-outline"
                                        style={{ fontSize: 20, paddingRight: 10 }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Feather name="navigation" style={{ fontSize: 20 }} />
                                </TouchableOpacity>
                            </View>
                            <Feather name="bookmark" style={{ fontSize: 20 }} />
                        </View>
                        <View style={{ paddingHorizontal: 15 }}>
                            <Text>
                                {like ? 'Te' : 'Le'} gusta a {like ? 'ti y a' : ''}{' '}
                                {like ? data.likes + 1 : data.likes} personas
                            </Text>
                            <Text style={{ opacity: 0.4, paddingVertical: 2 }}>
                                Ver todos los comentarios
                            </Text>
                            <View
                                style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={data.postPersonImage}
                                        style={{
                                            width: 25,
                                            height: 25,
                                            borderRadius: 100,
                                            backgroundColor: 'orange',
                                            marginRight: 10,
                                        }}
                                    />
                                    <TextInput
                                        placeholder="Añadir un comentario "
                                        style={{ opacity: 0.5 }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                );
            })}
        </View>
    )
}

export default Post

const styles = StyleSheet.create({})