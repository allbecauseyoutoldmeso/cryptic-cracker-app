import React from 'react'
import AnagramCracker from './AnagramCracker'

const Gadget = ({ gadget }) => {
  switch (gadget) {
    case 'anagramCracker':
      return <AnagramCracker />
    default:
      return null
  }
}

export default Gadget
