import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#c6e5d9',
    flexGrow: 1
  },
  container: {
    marginTop: 100,
    display: 'flex',
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
  gadgetContainer: {
    margin: 100
  }
})

export default styles
