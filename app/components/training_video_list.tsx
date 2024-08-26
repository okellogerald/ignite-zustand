import { FlashList } from "@shopify/flash-list"
import { Image, View, Dimensions } from "react-native"
import { FitnessVideo } from "../models/video"
import { Text } from "./index"

export const TrainingVideosListView: React.FC<{ videos: FitnessVideo[] }> = ({ videos }) => {
    const full_height = Dimensions.get("screen").height
    const full_width = Dimensions.get("screen").width

    return (
        <View style={{ height: full_height, width: full_width }}>
            <FlashList<FitnessVideo>
                data={videos}
                renderItem={({ item }) => (
                    <Card video={item} />
                )}
                keyExtractor={(item) => item.id}
                estimatedItemSize={50}
            />
        </View>
    )
}

const Card: React.FC<{ video: FitnessVideo }> = ({ video }) => {
    return (
        <View>
            <Image
                style={{
                    width: "100%",
                    height: 150,
                }}
                source={{
                    uri: video.thumbnail_url,
                }}
            />
            {/* <Text>{video.title}</Text>
            <Text>Duration: {video.duration}</Text> */}
        </View>
    )
}