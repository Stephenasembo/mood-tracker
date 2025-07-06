import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const LogMood = () => {
  const navigation = useNavigation()
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Pick an emoji to log your mood</Text>
      <EmojiIcons />
      <Button
      title='Go back to home'
      onPress={() => navigation.navigate('Homepage')}
      />
    </SafeAreaView>
  )
}

const EmojiIcons = () => (
  <View style={styles.emojiLayout}>
    <View>
      <Image
      style={styles.emoji}
      source={require('../assets/happy.png')}
      />
      <Text>Happy</Text>
    </View>
    <View>
      <Image
      style={styles.emoji}
      source={require('../assets/neutral.png')}
      />
      <Text>Neutral</Text>      
    </View>
    <View>
      <Image
      style={styles.emoji}
      source={require('../assets/sad.png')}
      />
      <Text>Sad</Text>
    </View>
    <View>
      <Image
      style={styles.emoji}
      source={require('../assets/angry.png')}
      />
      <Text>Angry</Text>
    </View>
    <View>
      <Image
      style={styles.emoji}
      source={require('../assets/tired.png')}
      />
      <Text>Tired</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    alignItems: 'center',
  },
  emojiLayout: {
    flexDirection: 'row',
    flex: 2,
    flexWrap: 'wrap',
  },
  emoji: {
    width: 150,
    height: 150,
  },
})