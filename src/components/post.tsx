import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { PostResponse, SimpleUsers } from '../interfaces/userInterfaces';
import { capitalizarPrimeraLetra } from '../utils/functions';

interface Props {
    user: SimpleUsers;
}

const PostCard = ({ user }: Props) => {

    const postData = user?.publications;

    return (
        <View>
            <Text style={{
                marginHorizontal: 10, fontSize: 15, fontWeight: 'bold', textDecorationLine: 'underline',
                fontFamily: 'Lobster-Regular',
            }}>
                User {user.id}
            </Text>
            {postData?.map((post, index) => {
                const [like, setLike] = useState(user?.isLiked);

                return (
                    <View key={index} style={styles.card}>
                        <View style={styles.postHead}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={{ uri: user.picture }}
                                    style={{ width: 40, height: 40, borderRadius: 100 }}
                                />
                                <View style={{ paddingLeft: 5 }}>

                                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                                        {user.name}
                                    </Text>

                                    <Text style={{ fontSize: 11, color: "#B0B0B0" }}>13 weeks ago</Text>
                                </View>
                            </View>
                            <Feather name="more-vertical" style={{ fontSize: 20 }} />
                        </View>

                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ fontWeight: 'bold' }} >{capitalizarPrimeraLetra(post.title)}</Text>
                        </View>
                        <View style={styles.textBody}>
                            <Text>{capitalizarPrimeraLetra(post.body)}</Text>
                        </View>

                        <View style={styles.postImageContainer}>
                            <Image resizeMode='cover' style={{ width: '100%', height: 250 }}
                                source={{ uri: post.imagenPublicacion }}
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
                                    <Ionic style={{ fontSize: 20, paddingRight: 10 }}
                                        name="ios-chatbubble-outline"
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
                                {user.likes ? like ? user.likes + 1 : user.likes : null} personas
                            </Text>
                            <Text style={{ opacity: 0.4, paddingVertical: 2 }}>
                                Ver todos los comentarios
                            </Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image style={styles.userLoggedProfile}
                                        source={{ uri: user.loggedImageUser }}
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
        width: 30,
        height: 30,
        borderRadius: 100,
        backgroundColor: 'orange',
        marginRight: 10,
    },
    likedContainer: {
        paddingRight: 10,
        fontSize: 20,
    },
    textBody: {
        marginHorizontal: 10,
        marginVertical: 10
    }
})