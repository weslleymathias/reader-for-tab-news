import { Text, View } from "react-native";
import { Header } from "../../shared/components/Header";

export default function LatestTab() {

    return (
        <View className="bg-background">
            <Header title="Recentes" />

            <Text className="text-text text-base font-family-regular">Tab 2</Text>
        </View>
    );
}