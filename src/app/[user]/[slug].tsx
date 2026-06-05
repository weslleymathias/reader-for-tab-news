import { useEffect } from "react";
import { Text } from "react-native";
import { TabNewsApi } from "../../shared/services/tabnews";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";

export default function Reader() {

    const { user, slug } = useLocalSearchParams();

    const { data } = useQuery({
        queryKey: ['news', user, slug],
        queryFn: async () => {
            if (Array.isArray(user)) return null;
            if (Array.isArray(slug)) return null;

            return await TabNewsApi.contents.getContent({ user, slug });
        }
    });

    console.log(data);

    return (
        <>
            <Text>Reader</Text>
        </>
    );
}