import { useEffect } from "react";
import { ActivityIndicator, ScrollView, Share, Text, TouchableOpacity, View } from "react-native";
import { TabNewsApi } from "../../shared/services/tabnews";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { DarkTheme } from "../../shared/themes/DarkTheme";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import Markdown from 'react-native-markdown-display';
import { MarkdownRender } from "../../shared/components/MarkdownRender";

export default function Reader() {

    const { user, slug } = useLocalSearchParams();
    const insets = useSafeAreaInsets();
    const router = useRouter();

    const { data, isFetching } = useQuery({
        queryKey: ['news', user, slug],
        queryFn: async () => {
            if (Array.isArray(user)) return null;
            if (Array.isArray(slug)) return null;

            return await TabNewsApi.contents.getContent({ user, slug });
        }
    });

    useEffect(() => {
        if (Array.isArray(user)) return;
        if (Array.isArray(slug)) return;

        TabNewsApi.contents.comments.getComments({ user, slug }).then(console.log);

    }, [])

    return (
        <ScrollView>
            <View style={{ height: insets.top }} />
            <View className='gap-2 px-2 py-4 flex-row items-center'>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons
                        size={24}
                        name="arrow-back"
                        color={DarkTheme.colors.border}
                    />
                </TouchableOpacity>


                <Text className="text-text font-family-bold line-clamp-1 flex-1">
                    {data?.title || 'Carregando...'}
                </Text>

                <TouchableOpacity
                    className="p-2"
                    disabled={!data}
                    onPress={() => Share.share({
                        url: `https://www.tabnews.com.br/${user}/${slug}`,
                        title: data?.title,
                        message: `${data?.title} \n\nLeia em: https://www.tabnews.com.br/${user}/${slug}`,
                    })}>
                    <MaterialIcons
                        size={24}
                        name="share"
                        color={DarkTheme.colors.highlight}
                    />
                </TouchableOpacity>
            </View>

            {!data && isFetching && (
                <View className="flex-1 items-center justify-center">
                    <ActivityIndicator
                        size='large'
                        className="text-highlight"
                    />
                </View>
            )}

            {data && (
                <View className="flex-1 px-1 pr-3 pb-40 gap-1 flex-row">
                    <View className="px-2 gap-2 items-center">
                        <Text className="text-textMuted text-base font-family-regular">
                            {data.children_deep_count}
                        </Text>

                        <View className="w-px flex-1 bg-border" />
                    </View>
                    <View className="gap-2 flex-1">
                        <View className="gap-2 flex-row items-center">
                            <Text className="font-family-regular text-sm bg-highlight text-textHighlight px-1 py-0.5 rounded">
                                {data.owner_username}
                            </Text>
                            <Text className="text-textMuted font-family-regular text-sm">
                                {Math.ceil(data.body.split(/\s+/).length / 200)} min de leitura
                            </Text>
                            <Text className="text-textMuted font-family-regular text-sm">
                                {formatDistanceToNow(data.publishedAt, { addSuffix: true, locale: ptBR })}
                            </Text>
                        </View>
                        <MarkdownRender content={data.body} />
                    </View>
                </View>
            )}

        </ScrollView>
    );
}