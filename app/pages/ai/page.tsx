import React, { FC } from "react"
import {
  Screen,
  Text,
} from "../../components"
import { MainTabScreenProps } from "../../navigators/MainNavigator"

export const AIPage: FC<MainTabScreenProps<"AI">> = (_props) => {
  return (
    <Screen preset="fixed" safeAreaEdges={["top"]}>
      <Text>AI Page</Text>
    </Screen>
  )
}
