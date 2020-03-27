import React from 'react'
import { getAnagrams } from '../apiRequests'
import Form from './Form'

const AnagramCracker = () => {
  return <Form getResponse={getAnagrams} label="letters" />
}

export default AnagramCracker
