import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import styles from '../styles'

const Form = ({ setInput, handleClick, label }) => {
  const handleChange = text => {
    setInput(text)
  }

  return (
    <>
      <TextInput
        onChangeText={handleChange}
        style={styles.input}
        autoCapitalize="none"
        placeholder={label}
        placeholderTextColor="#c6a49a"
      />
      <View style={styles.buttonContainer}>
        <Button onPress={handleClick} title="submit" color="#f4ead5" />
      </View>
    </>
  )
}

export default Form
