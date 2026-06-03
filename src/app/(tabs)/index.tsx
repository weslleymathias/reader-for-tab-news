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
    const [page, setPage] = useState(1);
    const [perPage] = useState(30);
    const [totalCount, setTotalCount] = useState(30);

    const handleFetchNews = useCallback((perPage: number, page: number) => {
        TabNewsApi.contents.listContents({ perPage, page }).then(result => {
            setNews(old => [...old, ...result.data]);
            setTotalCount(result.totalCount);
        })
            .finally(() => {
                setIsLoading(false);
                setIsRefreshing(false);
            });
    }, []);

    useEffect(() => {
        setIsLoading(true);
        handleFetchNews(perPage, page);
    }, [handleFetchNews, perPage, page]);

    console.log(page);


    return (
        <View className="bg-background">

            <NewsList
                header={<Header title="Relevantes" />}
                onItemPress={console.log}
                onRefresh={() => {
                    setIsRefreshing(true);
                    handleFetchNews();
                }}
                onLoadNext={() => setPage(page + 1)}
                isRefreshing={isRefreshing}
                disableLoadNext={totalCount < (page * perPage)}
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