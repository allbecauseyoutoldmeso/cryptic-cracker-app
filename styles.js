import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#c6e5d9',
    flexGrow: 1
  },
  container: {
    height: '50%',
    marginTop: 100,
    marginBottom: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: '#e94e77'
  },
  input: {
    fontSize: 20,
    backgroundColor: '#f4ead5',
    color: '#e94e77',
    width: 200,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#e94e77'
  },
  buttonContainer: {
    backgroundColor: '#e94e77',
    borderRadius: 5,
    width: 100,
    margin: 20
  },
  patternInput: {
    fontSize: 20,
    backgroundColor: '#f4ead5',
    color: '#e94e77',
    width: 20,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#e94e77',
    margin: 4
  },
  patternInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 200,
    flexWrap: 'wrap'
  }
})

export default styles
