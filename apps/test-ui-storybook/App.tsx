/* eslint-disable @typescript-eslint/no-require-imports */
import StorybookUIRoot from './.storybook';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import React from 'react';
import { useFonts } from 'expo-font';
import { breakpoints, themes, StyleSheet } from 'test-ui';

StyleSheet.configure({
  breakpoints,
  themes,
  settings: {
    initialTheme: 'light',
    adaptiveThemes: false,
  },
});

const App = () => {
  const [loaded] = useFonts({
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    'Inter-Bold': require('./assets/fonts/inter_bold.ttf'),
    'Inter-Regular': require('./assets/fonts/inter_regular.ttf'),
    'WorkSans-Black': require('./assets/fonts/worksans_black.ttf'),
    'WorkSans-Bold': require('./assets/fonts/worksans_bold.ttf'),
    'WorkSans-ExtraBold': require('./assets/fonts/worksans_extrabold.ttf'),
    'WorkSans-ExtraLight': require('./assets/fonts/worksans_extralight.ttf'),
    'WorkSans-Light': require('./assets/fonts/worksans_light.ttf'),
    'WorkSans-Medium': require('./assets/fonts/worksans_medium.ttf'),
    'WorkSans-Regular': require('./assets/fonts/worksans_regular.ttf'),
    'WorkSans-SemiBold': require('./assets/fonts/worksans_semibold.ttf'),
    'WorkSans-Thin': require('./assets/fonts/worksans_thin.ttf'),
  });

  if (!loaded) return null;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StorybookUIRoot />
    </GestureHandlerRootView>
  );
};

export default App;
