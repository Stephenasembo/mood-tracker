import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Homepage = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Welcome to the homepage</Text>
      <Button
      title='Log mood'
      onPress={() => navigation.navigate('Log mood')}
      />
    </View>
  )
}

const LogMood = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Pick an emoji to log your mood</Text>
      <Button
      title='Go back to home'
      onPress={() => navigation.navigate('Homepage')}
      />
    </View>
  )
}

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Homepage' component={Homepage} />
    <Stack.Screen name='Log mood' component={LogMood} />
  </Stack.Navigator>
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
