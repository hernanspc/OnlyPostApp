import axios from "axios";

export const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async () => {
    return await axios.get(`${BASE_URL}`);
};

export const getPostsOfUser = async (id: string) => {
    return await axios.get('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
}