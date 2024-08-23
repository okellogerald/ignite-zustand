import React, { FC } from "react"
import {
  Screen,
  Text,
} from "../components"
import { MainTabScreenProps } from "../navigators/MainNavigator"

export const HomePage: FC<MainTabScreenProps<"Home">> = (_props) => {
  return (
    <Screen preset="fixed" safeAreaEdges={["top"]}>
      <Text>HomePage</Text>
    </Screen>
  )
}
