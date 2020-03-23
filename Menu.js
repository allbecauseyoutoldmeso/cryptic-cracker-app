import React from 'react'
import { View, Button } from 'react-native'
import styles from './styles'

const Menu = ({ setGadget }) => {
  const handleClick = gadget => {
    setGadget(gadget)
  }

  return (
    <View style={styles.menu}>
      <Button
        title="anagrams"
        color="#e94e77"
        onPress={() => handleClick('anagramCracker')}
      />
      <Button
        title="pattern matcher"
        color="#e94e77"
        onPress={() => handleClick('patternMatcher')}
      />
      <Button
        title="synonyms"
        color="#e94e77"
        onPress={() => handleClick('synonymFinder')}
      />
      <Button
        title="definitions"
        color="#e94e77"
        onPress={() => handleClick('definitionFinder')}
      />
    </View>
  )
}

export default Menu
