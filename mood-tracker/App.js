import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogMood } from './components/LogMood';
import { Homepage } from './components/Homepage'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <SafeAreaProvider>
    <Stack.Navigator>
      <Stack.Screen name='Homepage' component={Homepage} />
      <Stack.Screen name='Log mood' component={LogMood} />
    </Stack.Navigator>
  </SafeAreaProvider>
)

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
