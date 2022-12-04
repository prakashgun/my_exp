import { Button, Header, Input } from '@rneui/themed'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import uuid from 'react-uuid'
import { addAccount, getAccountByName } from '../common/dbQueries'


const AddAccount = ({ navigation }: any) => {
    const [name, setName] = useState<string>('')
    const [balance, setBalance] = useState<any>()
    const [nameError, setNameError] = useState<string>('')
    const [balanceError, setBalanceError] = useState<string>('')

    const onAddItemPress = async () => {
        setNameError('')
        setBalanceError('')

        if (name.length < 2) {
            setNameError('Name should have atleast two characters')
            return
        }

        if (!balance) {
            setBalanceError('Account balance cannot be empty')
            return
        }

        if (await getAccountByName(name)) {
            setNameError('This account name already exists')
            return
        }

        await addAccount({
            id: uuid(),
            name: name,
            initial_balance: balance
        })

        navigation.navigate('AccountList')
    }

    return (
        <View>
            <Header
                leftComponent={{ onPress: () => navigation.navigate('Menu'), 'icon': 'menu' }}
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