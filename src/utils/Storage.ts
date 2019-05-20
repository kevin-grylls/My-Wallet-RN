import { AsyncStorage } from "react-native";

export const setItem = (keyName: string, value: any) =>
  AsyncStorage.setItem(keyName, value);

export const getItem = (keyName: string) => AsyncStorage.getItem(keyName);

export const changeItem = (keyName: string, value: any) =>
  AsyncStorage.mergeItem(keyName, value);

export const clearAll = () => AsyncStorage.clear();
