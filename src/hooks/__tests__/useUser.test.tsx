import { responseUserWithPostMock } from '../../utils/const';
import axios, { AxiosResponse, AxiosStatic } from 'axios';
import { useUserHook } from '../useUser';
import { UsersResponse } from '../../interfaces/userInterfaces';

interface AxiosMock extends AxiosStatic {
    mockResolvedValue: Function
    mockRejectedValue: Function
}

// jest.mock('axios');
// const mockedAxios = axios as jest.Mocked<typeof axios>;

// beforeAll(() => {
//     mockedAxios.get.mockImplementation(() => Promise.resolve(responseUserWithPostMock));
//     mockedAxios.post.mockImplementation(() => Promise.resolve(responseUserWithPostMock));
// });

// describe('Axios instance standart test', () => {

//     it('fetches successfully data from an API', async () => {

//         beforeEach(() => {
//             mockedAxios.get.mockResolvedValue(() => Promise.resolve(responseUserWithPostMock));
//         });
//         // getUsers();
//         // await expect(getUsers()).resolves.toEqual(responseUserWithPostMock);
//         // expect(axios.get).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/users`);
//     });
// });


it("useUserHook instance standart test", async () => {
    expect(typeof useUserHook).toBe('function');
});

// jest.mock('axios')
// const mockAxios = axios as AxiosMock

// it('make api call to get data', () => {
//     // call this first
//     mockAxios.mockResolvedValue(() => Promise.resolve(responseUserWithPostMock))

//     const mockedGet = jest.spyOn(axios, "get").mockImplementation(() => Promise.resolve({ responseUserWithPostMock }));
//     // expect(mockedGet).toBeCalledWith('https://jsonplaceholder.typicode.com/users');

// })



