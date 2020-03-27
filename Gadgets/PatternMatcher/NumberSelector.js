import React, { useState } from 'react'
import { Picker } from 'react-native'
import styles from '../../styles'
import { ascendingArray } from './helpers'

const NumberSelector = ({ length, changeLength }) => {
  return (
    <Picker
      style={{ height: 50, width: 50 }}
      onValueChange={changeLength}
      selectedValue={length}
    >
      {ascendingArray(40).map(num => {
        return <Picker.Item color="#e94e77" label={num} value={num} key={num} />
      })}
    </Picker>
  )
}

export default NumberSelector
