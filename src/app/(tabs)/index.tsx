import { ScrollView, Text, View } from "react-native";
import { Header } from "../../shared/components/Header";
import { ListItem } from "../../shared/components/ListItem";

export default function ImportsTab() {

    return (
        <View className="bg-background">

            <ScrollView>
                <Header title="Relevantes" />

                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(() => (
                    <ListItem
                        authorName="lvsouzadev"
                        position={1}
                        numberOfComments={4}
                        publishedAt={new Date()}
                        title="Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                        onPress={() => console.log('Pressionado')}
                    />
                ))}

            </ScrollView>
        </View>
    );
}