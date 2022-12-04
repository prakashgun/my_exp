import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createTables } from './src/common/dbQueries'
import { Icon } from '@rneui/themed'

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
      <Icon
        name='rowing' />

    </View>
  )
}

export default App