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
