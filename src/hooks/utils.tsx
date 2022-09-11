import axios from "axios";

export const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async () => {
    return await axios.get(`${BASE_URL}`);
};

export const getPostsOfUser = async (id: string) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
    const arrayPosts = data.map((e: any) => (
        { ...e, imagenPublicacion: `https://res.cloudinary.com/dd0myqhyb/image/upload/v1662351177/OnlyPost/post/post${e.id}.jpg` }
    ));
    console.log(id, 'arrayPosts', arrayPosts);
    return await arrayPosts;
}