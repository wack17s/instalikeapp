import { AsyncStorage } from 'react-native';

export async function saveToAsyncStorage(key: string, data: any) {
    try {
        const dataJSON = JSON.stringify(data);

        await AsyncStorage.setItem(key, dataJSON);

        console.warn(`${key} was successfuly saved to async storage.`);
    } catch (error) {
        console.warn(`${key} saving to async storage error: `, error);
    }
}

export async function getFromAsyncStorage(key: string) {
    try {
        const savedDataJSON = await AsyncStorage.getItem(key) || 'null';

        console.warn(`${key} was successfuly getted from async storage.`);

        return JSON.parse(savedDataJSON);
    } catch (error) {
        console.warn(`${key} getting from async storage error: `, error);
    }
}

export async function clearAsyncStorage() {
    try {
        await AsyncStorage.clear();

        console.warn('Async storage was successfuly cleared.');
    } catch (error) {
        console.warn('Clearing async storage error: ', error);
    }
}
