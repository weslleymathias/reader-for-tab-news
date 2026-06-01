import { Text, View } from "react-native";

interface IHeaderProps {
    title: string;
}

export const Header = ({ title }: IHeaderProps) => {

    return (
        <View>
            <Text className="text-text font-family-bold px-2 py-4 items-center justify-center"></Text>
        </View>
    );

}