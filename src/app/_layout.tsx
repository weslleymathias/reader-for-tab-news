import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();

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
        <>
            <StatusBar style="dark" />

            <Stack>
                <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
            </Stack>
        </>
    );
}

