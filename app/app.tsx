import "./utils/ignoreWarnings"
import React, { useEffect } from "react"
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"
import * as Linking from "expo-linking"
import { AppNavigator } from "./navigators"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { ViewStyle } from "react-native"
import { useStore } from "./store"

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"

// Web linking configuration
const prefix = Linking.createURL("/")
const config = {
  screens: {
    Login: {
      path: "",
    },
    Welcome: "welcome",
    Main: {
      screens: {
        AI: "ai",
        Home: "home",
        Fitness: "fitness",
        Nutrition: "nutrition",
        Lifestyle: "lifestyle",
      },
    },
  },
}

interface AppProps {
  hideSplashScreen: () => Promise<boolean>
}

/**
 * This is the root component of our app.
 */
function App(props: AppProps) {
  const { hideSplashScreen } = props

  const hasHydrated = useStore((state) => state._hasHydrated)

  useEffect(() => {
    if (hasHydrated) {
      setTimeout(hideSplashScreen, 500)
    }
  }, [hasHydrated])

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color.
  // In iOS: application:didFinishLaunchingWithOptions:
  // In Android: https://stackoverflow.com/a/45838109/204044
  // You can replace with your own loading component if you wish.
  if (!hasHydrated) return null

  const linking = {
    prefixes: [prefix],
    config,
  }

  // otherwise, we're ready to render the app
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView style={$container}>
        <AppNavigator
          linking={linking}
        />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

export default App

const $container: ViewStyle = {
  flex: 1,
}
