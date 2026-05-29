import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';
import { Text } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { DarkTheme } from '../../shared/themes/DarkTheme';

// Defining the layout of the custom tab navigator
export default function TabsLayout() {

    const insets = useSafeAreaInsets();

    return (
        <Tabs style={{ paddingBottom: insets.bottom, flex: 1 }}>
            <TabSlot />
            <TabList style={{ backgroundColor: DarkTheme.colors.paper, paddingBottom: insets.bottom }}>
                <TabTrigger name="imports" href="/">
                    <Text>Relevantes</Text>
                </TabTrigger>
                <TabTrigger name="latests" href="/latest">
                    <Text>Recentes</Text>
                </TabTrigger>
            </TabList>
        </Tabs>
    );
}
