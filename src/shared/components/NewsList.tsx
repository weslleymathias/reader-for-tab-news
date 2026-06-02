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
    onItemPress(item: INewsListItem): void;
}

export const NewsList = ({ items, onItemPress }: INewsListProps) => {

    return (
        <FlatList
            data={items}
            keyExtractor={(item) => item.id}
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
        />
    );

}