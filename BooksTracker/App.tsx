import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/pages/Routes';

import {ThemeProvider} from 'styled-components';
import theme from './global/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
