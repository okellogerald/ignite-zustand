import { TrainingVideosListView } from "app/components/training_video_list"
import { SAMPLE_FITNESS_VIDEOS } from "app/store/fitness/sample_videos"
import { View, StyleSheet } from "react-native"

export const ExercisesRecommendations = () => {
    return <View style={styles.body}>
        <TrainingVideosListView videos={SAMPLE_FITNESS_VIDEOS} />
    </View>
}

const styles = StyleSheet.create({
    body: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    }
})