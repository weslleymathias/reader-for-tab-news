import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';
import { Text } from 'react-native';

// Defining the layout of the custom tab navigator
export default function TabsLayout() {
    return (
        <Tabs>
            <TabSlot />
            <TabList>
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
