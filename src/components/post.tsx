import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { SimpleUsers } from '../interfaces/userInterfaces';

interface Props {
    data: SimpleUsers;
}

const PostCard = ({ data }: Props) => {

    const postData = [
        {
            postTitle: 'Luis Angel',
            postPersonImage: require('../assets/images/profile2.jpg'),
            postImage: require('../assets/images/post10.jpg'),
            isUserProfile: require('../assets/images/profile2.jpg'),
            likes: 765,
            isLiked: false,
        },
        {
            postTitle: 'Mark Zuckerberg',
            postPersonImage: require('../assets/images/profile1.jpg'),
            postImage: require('../assets/images/post2.jpg'),
            isUserProfile: require('../assets/images/profile2.jpg'),
            likes: 345,
            isLiked: false,
        },
        {
            postTitle: 'Tomy',
            postPersonImage: require('../assets/images/profile2.jpg'),
            postImage: require('../assets/images/post5.jpg'),
            isUserProfile: require('../assets/images/profile2.jpg'),
            likes: 734,
            isLiked: false,
        },
        {
            postTitle: 'Alvaro',
            postPersonImage: require('../assets/images/profile1.jpg'),
            postImage: require('../assets/images/post4.jpg'),
            isUserProfile: require('../assets/images/profile2.jpg'),
            likes: 875,
            isLiked: false,
        },
    ];

    return (
        <View>
            {/* data.puiblication */}
            {postData.map((data, index) => {
                const [like, setLike] = useState(data?.isLiked);
                return (
                    <View key={index} style={styles.card}>
                        <View
                            style={styles.postHead}>
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
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ fontWeight: 'bold' }} >Titulo</Text>
                        </View>
                        <View style={{
                            marginHorizontal: 10,
                            marginVertical: 10
                        }}>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.💰</Text>
                        </View>
                        <View style={styles.postImageContainer}>
                            <Image style={{ width: '95%', height: 200 }}
                                source={data.postImage}
                            />
                        </View>

                        <View style={styles.options}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => setLike(!like)}>
                                    <AntDesign name={like ? 'heart' : 'hearto'}
                                        style={[styles.likedContainer, {
                                            color: like ? 'red' : 'black',
                                        }]} />
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

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image style={styles.userLoggedProfile}
                                        source={data.isUserProfile}
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

export default PostCard

const styles = StyleSheet.create({
    card: {
        paddingBottom: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.1,
    },
    postHead: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
    },
    postImageContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 15,
    },
    userLoggedProfile: {
        width: 25,
        height: 25,
        borderRadius: 100,
        backgroundColor: 'orange',
        marginRight: 10,
    },
    likedContainer: {
        paddingRight: 10,
        fontSize: 20,
    }
})