import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import styles from './styles'
import Gadgets from './Gadgets'
import Menu from './Menu'

const App = () => {
  const [gadget, setGadget] = useState(null)

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Menu setGadget={setGadget} />
        <View style={styles.gadgetContainer}></View>
        <Gadgets gadget={gadget} />
      </View>
    </View>
  )
}

export default App
