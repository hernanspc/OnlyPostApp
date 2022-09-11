import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getDataAsyncStorage<T = any>(key: string) {
    try {
        const data = await AsyncStorage.getItem(key);
        return JSON.parse(data!);
    } catch (error) { }
}

export async function saveDataAsyncStorage(key: string, value: string | object) {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) { }
}

export async function removeDataAsyncStorage(key: string) {
    try {
        await AsyncStorage.removeItem(key);
        return null;
    } catch (error) { }
}