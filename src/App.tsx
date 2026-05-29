import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loaded, error] = useFonts({
    interRegular: require('./shared/assets/Inter/Inter_18pt-Regular.ttf'),
    interBold: require('./shared/assets/Inter/Inter_18pt-Bold.ttf'),
  })

  useEffect(() => {
    if (!loaded && !error) {
      return;
    }
    SplashScreen.hide();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'interBold' }}>Hello world!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
