import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import AnagramCracker from './AnagramCracker'

const App = () => {
  return (
    <View style={styles.background}>
      <View style={styles.gadgetContainer}>
        <Text style={styles.text}>cryptic cracker</Text>
      </View>
      <AnagramCracker />
    </View>
  )
}

export default App
