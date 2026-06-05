import { ScrollView, View } from "react-native";
import { Header } from "../../shared/components/Header";
import { NewsList } from "../../shared/components/NewsList";
import { TabNewsApi } from "../../shared/services/tabnews";
import { TContentResult } from "../../shared/services/tabnews/contents/ListContents";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";

export default function LatestTab() {

    const router = useRouter();

    const { data: news, isLoading, isRefetching, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery<TContentResult>({
        queryKey: ['news', { strategy: 'new' }],
        queryFn: async ({ pageParam }) => {
            const result = await TabNewsApi.contents.listContents({
                perPage: 30,
                page: pageParam as number,
                strategy: 'new',
            });

            return result;
        },
        getNextPageParam: (lastPage, _allPages, lastPageParam, _allPageParams) => {
            const lastPageNumber = lastPageParam as number;

            if (lastPage.totalCount > (lastPageNumber * 30)) {
                return lastPageNumber + 1;
            }

            return undefined;
        },
        initialPageParam: 1,
    });

    const allNews = (news?.pages || []).flatMap(page => page.data);


    return (
        <View className="bg-background">

            <NewsList
                header={<Header title="Relevantes" />}
                onItemPress={(item) => router.push(`/${item.authorName}/${item.slug}`)}
                onRefresh={() => refetch()}
                onLoadNext={() => fetchNextPage()}
                isRefreshing={isRefetching}
                disableLoadNext={!hasNextPage && !isLoading}
                items={
                    allNews.map(newsItem => ({
                        id: newsItem.id,
                        slug: newsItem.slug,
                        title: newsItem.title,
                        publishedAt: newsItem.created_at,
                        authorName: newsItem.owner_username,
                        numberOfComments: newsItem.children_deep_count,
                    }))
                }
            />

        </View>
    );
}