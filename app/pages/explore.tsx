import React, { FC } from "react"
import {
  Screen,
  Text,
} from "../components"
import { MainTabScreenProps } from "../navigators/MainNavigator"

export const ExplorePage: FC<MainTabScreenProps<"Explore">> = (_props) => {
  return (
    <Screen preset="fixed" safeAreaEdges={["top"]}>
      <Text>Explore</Text>
    </Screen>
  )
}
