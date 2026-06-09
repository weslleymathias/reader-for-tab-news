import { FlatList } from "react-native";
import { NewsListItem, NewsListItemSkeleton } from "./NewsListItem";

interface INewsListItem {
    id: string;
    slug: string;
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
    disableLoadNext: boolean;
}

export const NewsList = ({ items, header, onItemPress, onRefresh, isRefreshing, onLoadNext, disableLoadNext }: INewsListProps) => {

    return (
        <FlatList
            data={items}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={header}
            renderItem={({ item, index }) => (
                <NewsListItem
                    authorName={item.authorName}
                    position={index + 1}
                    numberOfComments={item.numberOfComments}
                    publishedAt={item.publishedAt}
                    title={item.title}
                    onPress={() => onItemPress(item)}
                />
            )}
            ListFooterComponent={!disableLoadNext ? (
                <>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((_, index) => (<NewsListItemSkeleton key={index} />))}
                </>
            )
                : undefined
            }
            onEndReachedThreshold={2.5}
            onEndReached={disableLoadNext ? undefined : onLoadNext}
        />
    );

}