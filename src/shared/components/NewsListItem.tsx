import { Text, View, Pressable } from "react-native";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { DarkTheme } from "../themes/DarkTheme";

interface INewListItemProps {
    position: number;
    title: string;
    publishedAt: Date;
    authorName: string;
    numberOfComments: number;
    onPress(): void;
}

export const NewsListItem = ({ position, title, publishedAt, authorName, numberOfComments, onPress }: INewListItemProps) => {

    return (
        <Pressable
            onPress={onPress}
            style={(state) => {
                if (state.pressed) return {
                    gap: 8,
                    borderRadius: 10,
                    flexDirection: 'row',
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    backgroundColor: DarkTheme.colors.paper
                };

                return {
                    gap: 8,
                    flexDirection: 'row',
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                };
            }}>
            <Text className="text-text font-family-regular text-base">
                {position}.
            </Text>

            <View className="gap-1 flex-1">
                <Text className="text-text font-family-regular text-base">
                    {title}.
                </Text>

                <View className="flex-row gap-2">
                    <Text className="text-textMuted font-family-regular text-base">
                        {numberOfComments} comentários
                    </Text>
                    <Text className="text-textMuted font-family-regular text-base">
                        {authorName}
                    </Text>
                    <Text className="text-textMuted font-family-regular text-base">
                        {formatDistanceToNow(publishedAt, { addSuffix: true, locale: ptBR })}
                    </Text>
                </View>
            </View>
        </Pressable>
    );

}

export const NewsListItemSkeleton = () => {

    return (
        <View className="flex-row gap-2 w-full px-4 py-2">

            <View className="w-6 h-4 rounded-sm bg-gray-500 animate-pulse" />

            <View className="gap-1 flex-1">
                <View className="w-full h-6 rounded-sm bg-gray-500 animate-pulse" />

                <View className="flex-row gap-2">
                    <View className="w-20 h-4 rounded-sm bg-gray-800 animate-pulse" />
                    <View className="w-20 h-4 rounded-sm bg-gray-800 animate-pulse" />
                    <View className="w-20 h-4 rounded-sm bg-gray-800 animate-pulse" />
                </View>
            </View>
        </View>
    );

}