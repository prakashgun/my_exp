import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import AccountList from './AccountList'
import AddAccount from './AddAcount'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AccountList" component={AccountList} />
        <Stack.Screen name="AddAccount" component={AddAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
