import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createTables } from './src/common/dbQueries'

const App = () => {

  const initialSetup = async () => {
    await createTables()
  }

  useEffect(() => {
    initialSetup()
  }, [])
  
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App