import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import AccountList from './AccountList'
import AccountScreen from './AccountScreen'
import AddAccount from './AddAccount'
import AddCategory from './AddCategory'
import AddTransaction from './AddTransaction'
import CategoryList from './CategoryList'
import CategoryScreen from './CategoryScreen'
import EditTransaction from './EditTransaction'
import ImportTransactions from './ImportTransactions'
import Menu from './Menu'
import TransactionList from './TransactionList'
import TransactionScreen from './TransactionScreen'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TransactionList" component={TransactionList} />
      <Stack.Screen name="AddTransaction" component={AddTransaction} />
      <Stack.Screen name="EditTransaction" component={EditTransaction} />
      <Stack.Screen name="TransactionScreen" component={TransactionScreen} />
      <Stack.Screen name="ImportTransactions" component={ImportTransactions} />

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