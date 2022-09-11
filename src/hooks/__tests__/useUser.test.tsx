import axios, { AxiosResponse } from 'axios';
import { userApi } from '../../api/userApi';
import { useUserHook } from '../useUser';

jest.mock('../../api/userApi');

describe('Axios instance standart test', () => {
    // (userApi.post as jest.Mock).mockResolvedValueOnce(() =>
    //     Promise.resolve(),
    // );
    // await useUserPaginated();
    // expect(userApi).toBeCalledTimes(1);
    test('component must exist', () => {
        // expect(wrapper).toBeTruthy();
    });
});