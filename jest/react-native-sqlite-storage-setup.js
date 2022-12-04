// Mocking react-native-sqlite-storage found in the following link
// https://github.com/andpor/react-native-sqlite-storage/issues/424#issuecomment-704362070
jest.mock('react-native-sqlite-storage', () => ({
    DEBUG: jest.fn,
    enablePromise: jest.fn(),
    openDatabase: () => {
      return {
        transaction: () => Promise.resolve({
          executeSql: () => {
            return Promise.resolve([]);
          }
        }),
        cleanDb: ()=> Promise.resolve(),
        executeSql: () => {
          return Promise.resolve([]);
        }
      };
    },
  }));

jest.useFakeTimers();