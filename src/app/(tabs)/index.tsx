import { ScrollView, View } from "react-native";
import { Header } from "../../shared/components/Header";
import { NewsList } from "../../shared/components/NewsList";
import { useEffect } from "react";
import { TabNewsApi } from "../../shared/services/tabnews";

export default function ImportsTab() {

    useEffect(() => {

        TabNewsApi.contents.listContents();

    }, []);

    return (
        <View className="bg-background">

            <NewsList
                header={<Header title="Relevantes" />}
                onItemPress={console.log}
                onRefresh={() => console.log('Recarregando')}
                onLoadNext={() => console.log('Carrega a próxima página')}
                isRefreshing={false}
                isLoadingNext={false}
                isFirstLoading={false}
                items={[
                    {
                        id: '1',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '2',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '3',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '4',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '5',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '6',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '7',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '8',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '9',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '10',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '11',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '12',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '13',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '14',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '15',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '16',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '17',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '18',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '19',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '20',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '21',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '22',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '23',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '24',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '25',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '26',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '27',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                    {
                        id: '28',
                        authorName: "lvsouzadev",
                        numberOfComments: 4,
                        publishedAt: new Date(),
                        title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas"
                    },
                ]}
            />

        </View>
    );
}