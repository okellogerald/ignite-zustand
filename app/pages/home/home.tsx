import React, { FC } from "react"
import {
  Screen,
  Text,
} from "../../components"
import { MainTabScreenProps } from "../../navigators/MainNavigator"
import { StyleSheet, View } from "react-native";
import HomeBody from "./body";

export const HomePage: FC<MainTabScreenProps<"Home">> = (_props) => {
  return (
    <Screen
      preset="fixed"
      safeAreaEdges={["top"]}
      style={styles.screen}
    >
      <View style={styles.body}>
        <Text>Home Page</Text>
        <Text>Welcome to your personalized wellness app.</Text>
      </View>
      <HomeBody />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 20,
  },
  body: {
    paddingVertical: 20,
  }
})