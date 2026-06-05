import { Stack } from 'expo-router';

export default function UserLayout() {


    return (

        <Stack >
            <Stack.Screen name='[slug]' options={{ headerShown: false }} />
        </Stack>

    );
}

