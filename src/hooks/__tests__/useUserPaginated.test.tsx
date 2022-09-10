import axios, { AxiosResponse } from 'axios';
import { userApi } from '../../api/userApi';
import { useUserPaginated } from '../useUserPaginated';

jest.mock('../../api/userApi', () => ({
    // const instance = {
    //     create: jest.fn(),
    // };
    // return jest.fn(() => instance);
}));

it('Axios instance standart test', async () => {
    (userApi.post as jest.Mock).mockResolvedValueOnce(() =>
        Promise.resolve(),
    );
    await useUserPaginated();
    expect(userApi).toBeCalledTimes(1);
});