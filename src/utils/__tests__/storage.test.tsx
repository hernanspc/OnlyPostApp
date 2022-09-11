import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    getDataAsyncStorage,
    removeDataAsyncStorage,
    saveDataAsyncStorage,
} from '../storage';

beforeEach(() => {
    AsyncStorage.clear();
});

describe('Test Async-Storage', () => {
    test('Can write and read async-storage', async () => {
        const data = 'John'
        await saveDataAsyncStorage('@data', data);
        const username = await getDataAsyncStorage('@data');
        expect(username).toBe('John');
    });

    test('Read async-storage', async () => {
        const lastName = await getDataAsyncStorage('lastName');
        expect(lastName).toBeNull();
    });
    test('Remove value in async-storage', async () => {
        await removeDataAsyncStorage('username');
        const username = await getDataAsyncStorage('username');
        expect(username).toBeNull();
    });

    test('Get Multi Data AsyncStorage', async () => {
        await saveDataAsyncStorage('username', 'Paul');
        await saveDataAsyncStorage('age', '24');
    });

}); 
