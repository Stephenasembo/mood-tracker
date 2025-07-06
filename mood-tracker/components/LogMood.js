import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
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
    <TouchableOpacity
    style={styles.emojiIcon}
    onPress={() => recordMood('happy')}
    >
      <Image
      style={styles.emoji}
      source={require('../assets/happy.png')}
      />
      <Text>Happy</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.emojiIcon}
    onPress={() => recordMood('neutral')}
    >
      <Image
      style={styles.emoji}
      source={require('../assets/neutral.png')}
      />
      <Text>Neutral</Text>      
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.emojiIcon}
    onPress={() => recordMood('sad')}
    >
      <Image
      style={styles.emoji}
      source={require('../assets/sad.png')}
      />
      <Text>Sad</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.emojiIcon}
    onPress={() => recordMood('angry')}
    >
      <Image
      style={styles.emoji}
      source={require('../assets/angry.png')}
      />
      <Text>Angry</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.emojiIcon}
    onPress={() => recordMood('tired')}
    >
      <Image
      style={styles.emoji}
      source={require('../assets/tired.png')}
      />
      <Text>Tired</Text>
    </TouchableOpacity>
  </View>
)

function recordMood(mood) {
  Alert.alert(`Mood selected. You are ${mood} today.`)
}

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
  emojiIcon: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: '25%',
    margin: 10,
    alignItems: 'center'
  }
})