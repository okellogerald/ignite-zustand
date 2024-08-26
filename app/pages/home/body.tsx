import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DietRecommendations } from './tab.diet';
import { ExercisesRecommendations } from './tab.exercise';
import { View, StyleSheet } from 'react-native';
import { SexRecommendations } from './tab.sex';
import { LifestyleRecommendations } from './tab.lifestyle';
import { MantraRecommendations } from './tab.mantra';

const Tab = createMaterialTopTabNavigator();

export default function HomeBody() {
    return (
        <View style={styles.body}>
            <Tab.Navigator
                screenOptions={{
                    swipeEnabled: true,
                    tabBarScrollEnabled: true,
                }}
            >
                <Tab.Screen name="Diet" component={DietRecommendations} />
                <Tab.Screen name="Training" component={ExercisesRecommendations} />
                <Tab.Screen name="Mantra" component={MantraRecommendations} />
                <Tab.Screen name="Sex" component={SexRecommendations} />
                <Tab.Screen name="Lifestyle" component={LifestyleRecommendations} />
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        height: "100%",
        width: "100%"
    }
})