import React, { useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import styles from '../styles'

const Form = ({ getResponse, label }) => {
  const [input, setInput] = useState(null)
  const [results, setResults] = useState([])

  const handleChange = text => {
    setInput(text)
  }

  const handleClick = () => {
    getResponse(input).then(response => setResults(response))
  }

  return (
    <>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        onChangeText={handleChange}
        style={styles.input}
        autoCapitalize="none"
      />
      <View style={styles.buttonContainer}>
        <Button onPress={handleClick} title="submit" color="#f4ead5" />
      </View>
      {results.map(item => (
        <Text style={styles.text}>{item}</Text>
      ))}
    </>
  )
}

export default Form
