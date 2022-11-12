import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { Button, Header, Input } from '@rneui/themed'
import { addAccount } from '../common/dbQueries'
import uuid from 'react-uuid'


const AddAccount = () => {
    const navigation = useNavigation<any>()
    const [name, setName] = useState<string>('')
    const [balance, setBalance] = useState<any>()
    const [nameError, setNameError] = useState<string>('')
    const [balanceError, setBalanceError] = useState<string>('')

    const onAddItemPress = async () => {

        if (name.length < 2) {
            setNameError('Name should have atleast two characters')
            return
        }

        if (!balance) {
            setBalanceError('Account balance cannot be empty')
            return
        }

        await addAccount({
            id: uuid(),
            name: name,
            initial_balance: balance
        })

        console.log('Account saved')
        navigation.goBack()
    }

    return (
        <View>
            <Header
                leftComponent={{ onPress: () => navigation.navigate('Menu') }}
                centerComponent={{ text: 'Add Account' }}
            />
            <Input
                placeholder="Name"
                accessibilityLabel="Name"
                leftIcon={{ type: 'font-awesome', name: 'bank' }}
                onChangeText={setName}
                errorMessage={nameError}
            />
            <Input
                placeholder="Balance"
                accessibilityLabel="Balance"
                leftIcon={{ type: 'material-icons', name: 'account-balance-wallet' }}
                keyboardType="numeric"
                onChangeText={setBalance}
                errorMessage={balanceError}
            />
            <Button title="Save" onPress={onAddItemPress} />
        </View>
    )
}

export default AddAccount

const styles = StyleSheet.create({})