import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  getItem: async (key: string) => {
    const item = await AsyncStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },

  setItem: async (key: string, value: any) => {
    const valueToStore = JSON.stringify(value);
    await AsyncStorage.setItem(key, valueToStore);
  },

  removeItem: async (key: string) => {
    await AsyncStorage.removeItem(key);
  },
};