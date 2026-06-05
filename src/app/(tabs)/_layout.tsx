import { Tabs, TabList, TabTrigger, TabSlot, TabTriggerSlotProps } from 'expo-router/ui';
import { Pressable, Text } from 'react-native';
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
                <TabTrigger name="imports" href="/" asChild>
                    <CustomTabButton iconName='newspaper' label='Relevantes' />
                </TabTrigger>
                <TabTrigger name="latests" href="/latest" asChild>
                    <CustomTabButton iconName='new-releases' label='Recentes' />
                </TabTrigger>
            </TabList>
        </Tabs>
    );
}

type TCustomTabProps = TabTriggerSlotProps & {
    label: string;
    iconName: string;
};


const CustomTabButton = ({ isFocused, iconName, label, ...props }: TCustomTabProps) => {
    return (
        <Pressable
            {...props}
            style={{
                paddingHorizontal: 8,
                gap: 8,
                alignItems: 'center',
                justifyContent: 'center'

            }}>
            <MaterialIcons name={iconName as 'style'} size={24} color={isFocused ? DarkTheme.colors.highlight : DarkTheme.colors.text} />
            <Text className={isFocused ? 'text-base font-family-regular text-highlight' : 'text-base font-family-regular text-text'}>{label}</Text>

        </Pressable>
    );
}