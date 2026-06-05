import { useEffect } from "react";
import { Text } from "react-native";
import { TabNewsApi } from "../../shared/services/tabnews";
import { useLocalSearchParams } from "expo-router";

export default function Reader() {

    const { user, slug } = useLocalSearchParams();

    useEffect(() => {

        if (Array.isArray(user)) return;
        if (Array.isArray(slug)) return;

        TabNewsApi.contents.getContent({ user, slug }).then(console.log);

    }, [user, slug])


    return (
        <>
            <Text>Reader</Text>
        </>
    );
}