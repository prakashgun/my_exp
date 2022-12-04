import { NavigationContainer } from '@react-navigation/native';
import { createTheme, lightColors, ThemeProvider } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { createTables, generateDefaultData } from './src/common/dbQueries';
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
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)

  const initialSetup = async () => {
    await createTables()
    await generateDefaultData()
  }

  useEffect(() => {
    initialSetup()
  }, [])
  
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App