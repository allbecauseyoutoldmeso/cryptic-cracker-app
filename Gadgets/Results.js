import React from 'react'
import { Text, View } from 'react-native'
import styles from '../styles'

const Results = ({ items }) => {
  return (
    <View>
      {items.map(item => (
        <Text style={styles.text} key={item}>
          {item}
        </Text>
      ))}
    </View>
  )
}

export default Results
