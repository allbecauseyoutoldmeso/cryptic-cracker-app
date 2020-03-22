import React, { useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import styles from './styles'
import { getAnagrams } from './apiRequests'

const AnagramCracker = () => {
  const [letters, setLetters] = useState(null)
  const [anagrams, setAnagrams] = useState([])

  const handleChange = text => {
    setLetters(text)
  }

  const handleClick = () => {
    getAnagrams(letters).then(anagrams => setAnagrams(anagrams))
  }

  return (
    <>
      <Text style={styles.text}>letters</Text>
      <TextInput
        onChangeText={handleChange}
        style={styles.input}
        autoCapitalize="none"
      />
      <View style={styles.buttonContainer}>
        <Button onPress={handleClick} title="submit" color="#f4ead5" />
      </View>
      {anagrams.map(item => (
        <Text style={styles.text}>{item}</Text>
      ))}
    </>
  )
}

export default AnagramCracker
