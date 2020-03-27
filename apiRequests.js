const baseUrl = 'http://localhost:3000'

const headers = {
  username: 'kate',
  password: 'Sallywag1'
}

export const getAnagrams = async letters => {
  const url = new URL(baseUrl + '/api/v1/anagrams')
  url.searchParams.append('characters', letters)
  const response = await fetch(url, { method: 'get', headers: headers })
  return response.json()
}

export const getMatches = async pattern => {
  const url = new URL(baseUrl + '/api/v1/matches')
  url.searchParams.append('pattern', pattern)
  const response = await fetch(url, { method: 'get', headers: headers })
  return response.json()
}

export const getSynonyms = async word => {
  var url = new URL(baseUrl + '/api/v1/synonyms')
  url.searchParams.append('word', word)
  const response = await fetch(url, { method: 'get', headers: headers })
  return response.json()
}

export const getDefinitions = async word => {
  var url = new URL(baseUrl + '/api/v1/definitions')
  url.searchParams.append('word', word)
  const response = await fetch(url, { method: 'get', headers: headers })
  return response.json()
}
