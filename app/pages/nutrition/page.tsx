import React, { FC } from "react"
import {
  Screen,
} from "../../components"
import { MainTabScreenProps } from "../../navigators/MainNavigator"
import { StyleSheet } from "react-native";
import NutritionPageBody from "./body";

export const NutritionPage: FC<MainTabScreenProps<"Nutrition">> = (_props) => {
  return (
    <Screen
      preset="fixed"
      safeAreaEdges={["top"]}
      style={styles.screen}
    >
      <NutritionPageBody />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 20,
  },
})
