import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadTasks = async () => {
  const savedTasks = await AsyncStorage.getItem('tasks');
  return savedTasks ? JSON.parse(savedTasks) : [];
};

export const saveTasks = async (tasks) => {
  await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
};
