import { RecipeListView } from "app/components/recipes_list"
import { SAMPLE_RECIPES } from "app/store/nutrition/sample"
import { View, StyleSheet,  } from "react-native"

export const DietRecommendations = () => {
    return <View style={styles.body}>
        <RecipeListView recipes={SAMPLE_RECIPES} />
    </View>
}

const styles = StyleSheet.create({
    body: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    }
})