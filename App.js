import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'

const styles = StyleSheet.create({
  crypticCracker: {
    backgroundColor: '#c6e5d9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const App = () => {
  const [letters, setLetters] = useState(null)
  const [anagrams, setAnagrams] = useState([])

  const handleChange = text => {
    setLetters(text)
  }

  const getAnagrams = async () => {
    const headers = {
      username: 'kate',
      password: 'Sallywag1'
    }

    const url = new URL('http://localhost:3000/api/v1/anagrams')
    url.searchParams.append('characters', letters)

    const response = await fetch(url, { method: 'get', headers: headers })
    return response.json()
  }

  const handleClick = () => {
    getAnagrams().then(anagrams => setAnagrams(anagrams))
  }

  return (
    <View style={styles.crypticCracker}>
      <Text>letters</Text>
      <TextInput
        placeholder="letters"
        onChangeText={handleChange}
        value={letters}
      />
      <Button onPress={handleClick} title="submit" />
      {anagrams.map(item => (
        <Text>{item}</Text>
      ))}
    </View>
  )
}

export default App
