import { FlatList } from "react-native";
import { ListItem } from "./ListItem";

interface INewsListItem {
    id: string;
    title: string;
    publishedAt: Date;
    authorName: string;
    numberOfComments: number;
}

interface INewsListProps {
    items: INewsListItem[];
    header: React.ReactElement;
    onItemPress(item: INewsListItem): void;
    onRefresh(): void;
    isRefreshing: boolean;
    onLoadNext(): void;
    isLoadingNext: boolean;
    isFirstLoading: boolean;
}

export const NewsList = ({ items, header, onItemPress, onRefresh, isRefreshing, onLoadNext, isLoadingNext, isFirstLoading }: INewsListProps) => {

    return (
        <FlatList
            data={items}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={header}
            renderItem={({ item, index }) => (
                <ListItem
                    authorName="lvsouzadev"
                    position={index + 1}
                    numberOfComments={item.numberOfComments}
                    publishedAt={item.publishedAt}
                    title={item.title}
                    onPress={() => onItemPress(item)}
                />
            )}
            onEndReachedThreshold={1}
            onEndReached={onLoadNext}
        />
    );

}