import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#c6e5d9',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
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
    width: '30%',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#e94e77'
  },
  buttonContainer: {
    backgroundColor: '#e94e77',
    borderRadius: 5
  },
  gadgetContainer: {
    marginTop: 100
  }
})

export default styles
