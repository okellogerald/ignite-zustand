import React, { FC } from "react"
import {
  Screen,
  Text,
} from "../../components"
import { MainTabScreenProps } from "../../navigators/MainNavigator"

export const LifestylePage: FC<MainTabScreenProps<"Lifestyle">> = (_props) => {
  return (
    <Screen preset="fixed" safeAreaEdges={["top"]}>
      <Text>Lifestyle page</Text>
    </Screen>
  )
}
