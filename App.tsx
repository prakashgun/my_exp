import { NavigationContainer } from '@react-navigation/native';
import { createTheme, lightColors, ThemeProvider } from '@rneui/themed';
import React from 'react';
import { Platform } from 'react-native';
import AppNavigator from './src/components/AppNavigator';


const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App