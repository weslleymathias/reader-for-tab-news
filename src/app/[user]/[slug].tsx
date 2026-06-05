import { useEffect } from "react";
import { Share, Text, TouchableOpacity, View } from "react-native";
import { TabNewsApi } from "../../shared/services/tabnews";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { DarkTheme } from "../../shared/themes/DarkTheme";

export default function Reader() {

    const { user, slug } = useLocalSearchParams();
    const insets = useSafeAreaInsets();
    const router = useRouter();

    const { data } = useQuery({
        queryKey: ['news', user, slug],
        queryFn: async () => {
            if (Array.isArray(user)) return null;
            if (Array.isArray(slug)) return null;

            return await TabNewsApi.contents.getContent({ user, slug });
        }
    });

    return (
        <>
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

            <View>
                <Text>Content</Text>
            </View>
        </>
    );
}