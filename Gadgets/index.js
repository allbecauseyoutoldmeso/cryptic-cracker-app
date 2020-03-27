import React from 'react'
import AnagramCracker from './AnagramCracker'
import DefinitionFinder from './DefinitionFinder'
import SynonymFinder from './SynonymFinder'

const Gadget = ({ gadget }) => {
  switch (gadget) {
    case 'anagramCracker':
      return <AnagramCracker />
    case 'synonymFinder':
      return <SynonymFinder />
    case 'definitionFinder':
      return <DefinitionFinder />

    default:
      return null
  }
}

export default Gadget
