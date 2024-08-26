
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TrainingVideosListView } from 'app/components/training_video_list';
import { SAMPLE_FITNESS_VIDEOS } from 'app/store/fitness/sample_videos';
import { spacing } from 'app/theme';
import { View, StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function FitnessPageBody() {
    return (
        <View style={{ height: "100%" }}>
            <Tab.Navigator
                screenOptions={{
                    swipeEnabled: true,
                    tabBarScrollEnabled: true,
                }}
            >
                <Tab.Screen name="All" component={Videos} />
                <Tab.Screen name="Weights" component={Videos} />
                <Tab.Screen name="Pilates" component={Videos} />
                <Tab.Screen name="Yoga" component={Videos} />
            </Tab.Navigator>
        </View>
    );
}

const Videos = () => {
    return <View style={styles.body}>
       <TrainingVideosListView videos={SAMPLE_FITNESS_VIDEOS} />;
    </View>
}

const styles = StyleSheet.create({
    body: {
        paddingHorizontal: spacing.PAGE_HORIZONTAL_PADDING,
    }
})