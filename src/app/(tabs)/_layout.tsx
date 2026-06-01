import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';
import { Text } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { DarkTheme } from '../../shared/themes/DarkTheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// Defining the layout of the custom tab navigator
export default function TabsLayout() {

    const insets = useSafeAreaInsets();

    return (
        <Tabs style={{ paddingTop: insets.top, flex: 1 }}>
            <TabSlot />
            <TabList style={{
                padding: 8,
                paddingHorizontal: 16,
                backgroundColor: DarkTheme.colors.paper,
                paddingBottom: insets.bottom + 8,
                alignItems: 'center',
                justifyContent: 'space-around'
            }}>
                <TabTrigger name="imports" href="/" style={{
                    paddingHorizontal: 8,
                    gap: 8,
                    alignItems: 'center',
                    justifyContent: 'center'

                }}>
                    <MaterialIcons name="newspaper" size={24} color={DarkTheme.colors.text} />
                    <Text className='text-text'>Relevantes</Text>
                </TabTrigger>
                <TabTrigger name="latests" href="/latest" style={{
                    paddingHorizontal: 8,
                    gap: 8,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <MaterialIcons name="new-releases" size={24} color={DarkTheme.colors.text} />
                    <Text className='text-text'>Recentes</Text>
                </TabTrigger>
            </TabList>
        </Tabs>
    );
}
