import React from 'react'
import Template from './Template'
import { getDefinitions } from '../apiRequests'

const DefinitionFinder = () => {
  return <Template getResults={getDefinitions} label="word" />
}

export default DefinitionFinder
