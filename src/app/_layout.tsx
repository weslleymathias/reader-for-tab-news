import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import "./../global.css";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
            <View className="flex-1 bg-background">
                <StatusBar style="light" />

                <Stack screenOptions={{ contentStyle: { backgroundColor: 'transparent' } }}>
                    <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
                </Stack>
            </View>
        </QueryClientProvider>
    );
}

