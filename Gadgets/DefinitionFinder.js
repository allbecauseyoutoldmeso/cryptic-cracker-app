import React from 'react'
import { getDefinitions } from '../apiRequests'
import Form from './Form'

const DefinitionFinder = () => {
  return <Form getResponse={getDefinitions} label="word" />
}

export default DefinitionFinder
