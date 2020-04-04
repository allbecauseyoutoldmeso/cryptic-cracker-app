import React, { useState } from 'react'
import { View, Keyboard, ActivityIndicator } from 'react-native'
import Form from './Form'
import Results from './Results'

const Template = ({ getResults, label }) => {
  const [input, setInput] = useState(null)
  const [results, setResults] = useState([])
  const [stage, setState] = useState(null)

  const handleClick = () => {
    Keyboard.dismiss()
    setState('loading')
    getResults(input).then(response => {
      setState('loaded')
      setResults(response)
    })
  }

  return (
    <View>
      <Form setInput={setInput} handleClick={handleClick} label={label} />
      {stage === 'loading' && (
        <ActivityIndicator size="large" color="#e94e77" />
      )}
      {stage === 'loaded' && <Results items={results} />}
    </View>
  )
}

export default Template
