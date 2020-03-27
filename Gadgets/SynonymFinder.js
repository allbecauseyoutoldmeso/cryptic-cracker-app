import React from 'react'
import { getSynonyms } from '../apiRequests'
import Form from './Form'

const SynonymFinder = () => {
  return <Form getResponse={getSynonyms} label="word" />
}

export default SynonymFinder
