import { useNavigation } from '@react-navigation/native'
import { Header } from '@rneui/themed'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'


const CommonHeader = ({ heading }: any) => {

  const navigation:any = useNavigation()

  return (
      <TouchableOpacity onPress={() => navigation.navigate('Menu')} testID="menu">
        <Header
          leftComponent={{ 'icon': 'menu' }}
          centerComponent={{ text: heading }}
        />
      </TouchableOpacity>
  )
}

export default CommonHeader
