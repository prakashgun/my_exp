import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import AccountList from './AccountList'
import AccountScreen from './AccountScreen'
import AddAccount from './AddAccount'
import AddCategory from './AddCategory'
import CategoryList from './CategoryList'
import CategoryScreen from './CategoryScreen'
import Menu from './Menu'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AccountList" component={AccountList} />
        <Stack.Screen name="AddAccount" component={AddAccount} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />

        <Stack.Screen name="CategoryList" component={CategoryList} />
        <Stack.Screen name="AddCategory" component={AddCategory} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />

        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
  )
}

export default AppNavigator
