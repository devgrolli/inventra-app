import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'OpenSans': require('./fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./fonts/OpenSans-Bold.ttf'),
    'OpenSans-Light': require('./fonts/OpenSans-Light.ttf'),
  });
};
