import { Recipe } from "app/models/recipe"
import { Dimensions, Image, View } from "react-native"
import { ListView, Text } from "./index"

export const RecipeListView: React.FC<{ recipes: Recipe[] }> = ({ recipes }) => {
    const full_height = Dimensions.get("screen").height
    const full_width = Dimensions.get("screen").width

    return (
        <View style={{ height: full_height, width: full_width }}>
            <ListView
                data={recipes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <RecipeCard key={item.id} recipe={item} />
                )}
                estimatedItemSize={96}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            />
        </View>
    )
}

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
    return (
        <View>
            <Image
                style={{
                    width: "100%",
                    height: 200,
                }}
                source={{
                    uri: recipe.image_url,
                }}
            />
            <Text>{recipe.title}</Text>
            <Text>Score: {recipe.score}</Text>
        </View>
    )
}