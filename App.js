import 'react-native-gesture-handler'
import React from 'react'
import Navigator from './src/navigations/Navigator'
import { Provider } from 'react-redux'
import { store, persistor } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import { ThemeProvider } from 'styled-components'
import theme from './src/theme/LightTheme'

import { useFonts } from 'expo-font'

const fonts = {
  Roboto_100Thin: require('./assets/fonts/Roboto-Thin.ttf'),
  Roboto_300Light: require('./assets/fonts/Roboto-Light.ttf'),
  Roboto_400Regular: require('./assets/fonts/Roboto-Regular.ttf'),
  Roboto_500Medium: require('./assets/fonts/Roboto-Medium.ttf'),
  Roboto_700Bold: require('./assets/fonts/Roboto-Bold.ttf'),
  Roboto_900Black: require('./assets/fonts/Roboto-Black.ttf'),
}

const App = () => {
  const [loaded] = useFonts(fonts)

  if (!loaded) return null
  else
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Navigator />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    )
}

export default App
