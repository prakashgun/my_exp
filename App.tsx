import { Button, createTheme, lightColors, ThemeProvider } from '@rneui/themed';
import React from 'react';
import { Platform } from 'react-native';
import { Icon } from '@rneui/themed';

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
      {/* This button's color will now be the default iOS / Android blue. */}
      <Button title="My Button" />
      <Icon
        name='rowing' />
    </ThemeProvider>
  );
}

export default App