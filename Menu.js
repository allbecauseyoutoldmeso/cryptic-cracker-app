import React from 'react'
import { Picker } from 'react-native'
import styles from './styles'

const Menu = ({ setGadget, gadget }) => {
  const handleChange = option => {
    setGadget(option)
  }

  return (
    <Picker
      style={{ height: 50, width: 150 }}
      onValueChange={handleChange}
      selectedValue={gadget}
    >
      <Picker.Item color="#e94e77" label="anagrams" value="anagramCracker" />
      <Picker.Item color="#e94e77" label="synonyms" value="synonymFinder" />
      <Picker.Item
        color="#e94e77"
        label="definitions"
        value="definitionFinder"
      />
      <Picker.Item color="#e94e77" label="patterns" value="patternMatcher" />
    </Picker>
  )
}

export default Menu
