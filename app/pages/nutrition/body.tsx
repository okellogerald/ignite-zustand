import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RecipeListView } from 'app/components/recipes_list';
import { SAMPLE_RECIPES } from 'app/store/nutrition/sample';
import React from 'react';
import { View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function NutritionPageBody() {
    return (
        <View style={{ height: "100%" }}>
            <Tab.Navigator
                screenOptions={{
                    swipeEnabled: true,
                    tabBarScrollEnabled: true,
                }}
            >
                <Tab.Screen name="Breakfast" component={RecipeVideos} />
                <Tab.Screen name="Lunch" component={RecipeVideos} />
                <Tab.Screen name="Dinner" component={RecipeVideos} />
                <Tab.Screen name="Snacks" component={RecipeVideos} />
                <Tab.Screen name="Desserts" component={RecipeVideos} />
                <Tab.Screen name="Drinks" component={RecipeVideos} />
            </Tab.Navigator>
        </View>
    );
}

const RecipeVideos = () => {
    return <RecipeListView recipes={SAMPLE_RECIPES} />;
}
