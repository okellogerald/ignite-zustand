import { StyleSheet, View } from "react-native"
import { Button } from "./Button"
import { PropsWithChildren } from "react"
import { spacing } from "app/theme"
import { ListView } from "./ListView"
import { Category } from "app/models/category"

interface Props {
    categories: Category[],
    onCategoryPress: (categoryId: string) => void,
}

export const CategoriesListView: React.FC<Props> = (props) => {
    const { categories } = props

    return (
        <ListView
            horizontal
            data={categories}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
                <CategoryCard
                    isFirst={index === 0}
                    isLast={index === categories.length - 1}
                    onPress={() => props.onCategoryPress(item.id)}
                >
                    {item.name}
                </CategoryCard>
            )}
            estimatedItemSize={96}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        />
    )
}

const CategoryCard: React.FC<PropsWithChildren<{ isLast: boolean, isFirst: boolean, onPress: () => void }>> = (props) => {
    const { children, isFirst, isLast, onPress } = props

    const firstItemStyles = isFirst && styles.firstItem
    const lastItemStyles = isLast && styles.lastItem
    const itemStyles = styles.item

    return <Button
        onPress={onPress}
        style={{
            borderRadius: 30,
            padding: 20,

            ...itemStyles,
            ...firstItemStyles,
            ...lastItemStyles,
        }}>
        {children}
    </Button>
}

const styles = StyleSheet.create({
    item: {
    },
    firstItem: {
        marginLeft: spacing.PAGE_HORIZONTAL_PADDING,
    },
    lastItem: {
        marginRight: spacing.PAGE_HORIZONTAL_PADDING,
    },
});