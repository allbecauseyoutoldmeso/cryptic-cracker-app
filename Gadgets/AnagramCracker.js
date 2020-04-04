import React from 'react'
import Template from './Template'
import { getAnagrams } from '../apiRequests'

const AnagramCracker = () => {
  return <Template getResults={getAnagrams} label="word" />
}

export default AnagramCracker
