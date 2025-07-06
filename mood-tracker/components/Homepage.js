import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Homepage = () => {
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
