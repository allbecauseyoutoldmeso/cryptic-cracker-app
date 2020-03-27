import React, { useState } from 'react'
import { View, TextInput, Text, Button, Keyboard } from 'react-native'
import styles from '../../styles'
import NumberSelector from './NumberSelector'
import { ascendingArray } from './helpers'
import { getMatches } from '../../apiRequests'

const PatternMatcher = () => {
  const [length, setLength] = useState(0)
  const [pattern, setPattern] = useState(null)
  const [matches, setMatches] = useState([])

  const changeLength = newLength => {
    setLength(newLength)
    setPattern('-'.repeat(newLength))
  }

  const handleChange = (letter, index) => {
    const character = letter.length > 0 ? letter : '-'

    const newPattern =
      pattern.substr(0, index - 1) + character + pattern.substr(index)

    setPattern(newPattern)
  }

  const handleClick = () => {
    Keyboard.dismiss()
    getMatches(pattern).then(response => setMatches(response))
  }

  return (
    <View>
      <NumberSelector length={length} changeLength={changeLength} />
      <View style={styles.patternInputContainer}>
        {ascendingArray(parseInt(length)).map(num => {
          return (
            <TextInput
              onChangeText={letter => handleChange(letter, num)}
              style={styles.patternInput}
              autoCapitalize="none"
              key={num}
              maxLength={1}
            />
          )
        })}
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={handleClick} title="submit" color="#f4ead5" />
      </View>
      {matches.map(item => (
        <Text style={styles.text} key={item}>
          {item}
        </Text>
      ))}
    </View>
  )
}

export default PatternMatcher
