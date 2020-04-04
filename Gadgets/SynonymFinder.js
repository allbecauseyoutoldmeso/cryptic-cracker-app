import React from 'react'
import Template from './Template'
import { getSynonyms } from '../apiRequests'

const SynonymFinder = () => {
  return <Template getResults={getSynonyms} label="letters" />
}

export default SynonymFinder
