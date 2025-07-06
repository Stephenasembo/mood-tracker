import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const LogMood = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Pick an emoji to log your mood</Text>
      <EmojiIcons />
      <Button
      title='Go back to home'
      onPress={() => navigation.navigate('Homepage')}
      />
    </View>
  )
}

const EmojiIcons = () => (
  <View style={styles.emojiLayout}>
    <View>
      <Image
      source={require('../assets/happy.svg')}
      />
      <Text>Happy</Text>
    </View>
    <View>
      <Image
      source={require('../assets/neutral.svg')}
      />
      <Text>Neutral</Text>      
    </View>
    <View>
      <Image
      source={require('../assets/sad.svg')}
      />
      <Text>Sad</Text>
    </View>
    <View>
      <Image
      source={require('../assets/angry.svg')}
      />
      <Text>Angry</Text>
    </View>
    <View>
      <Image
      source={require('../assets/tired.svg')}
      />
      <Text>Tired</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  emojiLayout: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
})