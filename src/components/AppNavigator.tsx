import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import MyTest from './MyTest'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AccountList" component={MyTest} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
