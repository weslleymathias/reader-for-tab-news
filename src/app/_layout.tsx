import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { ThemeProvider, DarkTheme as DefaultDarkTheme } from '@react-navigation/native';
import { DarkTheme } from './../shared/themes/DarkTheme';

import "./../global.css";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60,  //1min
            gcTime: 24 * 60 * 60 * 1000,  //24h
        }
    },
});

const asyncStoragePersister = createAsyncStoragePersister({
    storage: AsyncStorage,
})


export default function RootLayout() {

    const [loaded, error] = useFonts({
        interRegular: require('./../shared/assets/Inter/Inter_18pt-Regular.ttf'),
        interBold: require('./../shared/assets/Inter/Inter_18pt-Bold.ttf'),
    })

    useEffect(() => {
        if (!loaded && !error) {
            return;
        }
        SplashScreen.hide();
    }, [loaded, error]);

    if (!loaded && !error) return null;

    return (
        <PersistQueryClientProvider
            client={queryClient}
            persistOptions={{
                persister: asyncStoragePersister,
                maxAge: 24 * 60 * 60 * 1000, //24h
            }}>
            <View className="flex-1">
                <StatusBar style="light" />

                <ThemeProvider value={{
                    ...DefaultDarkTheme,
                    colors: {
                        ...DefaultDarkTheme.colors,
                        background: DarkTheme.colors.background,
                        border: DarkTheme.colors.border,
                        card: DarkTheme.colors.paper,
                        text: DarkTheme.colors.text,
                    }
                }}>
                    <Stack screenOptions={{ contentStyle: { backgroundColor: 'transparent' } }}>
                        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
                        <Stack.Screen name='[user]' options={{ headerShown: false }} />
                    </Stack>
                </ThemeProvider>
            </View>
        </PersistQueryClientProvider>
    );
}

