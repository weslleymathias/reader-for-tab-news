import { ScrollView, View } from "react-native";
import { Header } from "../../shared/components/Header";
import { NewsList } from "../../shared/components/NewsList";
import { useCallback, useEffect, useState } from "react";
import { TabNewsApi } from "../../shared/services/tabnews";
import { TContentItemResult } from "../../shared/services/tabnews/contents/ListContents";

export default function ImportsTab() {

    const [news, setNews] = useState<TContentItemResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleFetchNews = useCallback(() => {
        TabNewsApi.contents.listContents().then(result => {
            setNews(result);
        })
            .finally(() => {
                setIsLoading(false);
                setIsRefreshing(false);
            });
    }, [])

    useEffect(() => {
        setIsLoading(true);
        handleFetchNews();
    }, [handleFetchNews]);



    return (
        <View className="bg-background">

            <NewsList
                header={<Header title="Relevantes" />}
                onItemPress={console.log}
                onRefresh={() => {
                    setIsRefreshing(true);
                    handleFetchNews();
                }}
                onLoadNext={() => console.log('Carrega a próxima página')}
                isRefreshing={isRefreshing}
                isLoadingNext={isLoading && news.length > 0}
                isFirstLoading={isLoading && news.length === 0}
                items={news.map(newsItem => ({
                    id: newsItem.id,
                    title: newsItem.title,
                    publishedAt: newsItem.created_at,
                    authorName: newsItem.owner_username,
                    numberOfComments: newsItem.children_deep_count,
                }))}
            />

        </View>
    );
}