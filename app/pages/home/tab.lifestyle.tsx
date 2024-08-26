import { Text } from "app/components"
import { View, StyleSheet } from "react-native"

export const LifestyleRecommendations = () => {
    return <View style={styles.body}>
        <Text>Life style Recommendations</Text>
    </View>
}

const styles = StyleSheet.create({
    body: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    }
})