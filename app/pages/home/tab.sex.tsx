import { Text } from "app/components"
import { View, StyleSheet } from "react-native"

export const SexRecommendations = () => {
    return <View style={styles.body}>
        <Text>Other Recommendations</Text>
    </View>
}

const styles = StyleSheet.create({
    body: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    }
})