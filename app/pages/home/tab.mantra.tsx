import { Text } from "app/components"
import { View, StyleSheet } from "react-native"

export const MantraRecommendations = () => {
    return <View style={styles.body}>
        <Text>Mantra Recommendations</Text>
    </View>
}

const styles = StyleSheet.create({
    body: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    }
})