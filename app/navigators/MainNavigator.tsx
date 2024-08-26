import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { HomePage } from "../pages/home/home"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { AIPage, LifestylePage, NutritionPage } from "app/pages"
import { Brain, Clapperboard, Home, User, UtensilsCrossed } from "lucide-react-native"
import { FitnessPage } from "app/pages/fitness/page"

export type MainTabParamList = {
  Home: undefined
  Fitness: undefined
  Nutrition: undefined
  Lifestyle: undefined
  AI: undefined
}

export type MainTabScreenProps<T extends keyof MainTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<MainTabParamList>()

export function DemoNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >

      <Tab.Screen
        name="Fitness"
        component={FitnessPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Clapperboard color={focused ? colors.tint : undefined} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Nutrition"
        component={NutritionPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <UtensilsCrossed color={focused ? colors.tint : undefined} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Home color={focused ? colors.tint : undefined} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Lifestyle"
        component={LifestylePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <User color={focused ? colors.tint : undefined} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="AI"
        component={AIPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Brain color={focused ? colors.tint : undefined} size={30} />
          ),
        }}
      />

    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.md,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.normal,
  lineHeight: 16,
}
