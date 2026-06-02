import { Text, View, Pressable } from "react-native";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { DarkTheme } from "../themes/DarkTheme";

interface IListItemProps {
    position: number;
    title: string;
    publishedAt: Date;
    authorName: string;
    numberOfComments: number;
    onPress(): void;
}

export const ListItem = ({ position, title, publishedAt, authorName, numberOfComments, onPress }: IListItemProps) => {

    return (
        <Pressable
            onPress={onPress}
            className="flex-row gap-2 px-4 py-2"
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

            <View className="gap-1">
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