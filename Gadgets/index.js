import React from 'react'
import AnagramCracker from './AnagramCracker'
import DefinitionFinder from './DefinitionFinder'
import SynonymFinder from './SynonymFinder'
import PatternMatcher from './PatternMatcher/index'

const Gadget = ({ gadget }) => {
  switch (gadget) {
    case 'anagramCracker':
      return <AnagramCracker />
    case 'synonymFinder':
      return <SynonymFinder />
    case 'definitionFinder':
      return <DefinitionFinder />
    case 'patternMatcher':
      return <PatternMatcher />

    default:
      return null
  }
}

export default Gadget
