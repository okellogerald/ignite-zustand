import React, { FC } from "react"
import { Screen } from "../../components"
import { MainTabScreenProps } from "../../navigators/MainNavigator"
import { StyleSheet } from "react-native";
import FitnessPageBody from "./body";

export const FitnessPage: FC<MainTabScreenProps<"Fitness">> = (_props) => {
  return (
    <Screen
      preset="fixed"
      safeAreaEdges={["top"]}
      style={styles.screen}
    >
      <FitnessPageBody />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 20,
  },
})
