/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

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

it('renders correctly', () => {
  renderer.create(<App />);
});
