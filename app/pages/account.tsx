import React, { FC } from "react"
import {
  Screen,
  Text,
} from "../components"
import { MainTabScreenProps } from "../navigators/MainNavigator"

export const AccountPage: FC<MainTabScreenProps<"Account">> = (_props) => {
  return (
    <Screen preset="fixed" safeAreaEdges={["top"]}>
      <Text>Account page</Text>
    </Screen>
  )
}
