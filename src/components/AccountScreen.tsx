import { useIsFocused } from '@react-navigation/native'
import { Header, PricingCard } from '@rneui/themed'
import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, StyleSheet, View } from 'react-native'
import { deleteAccount, getAccount } from '../common/dbQueries'
import { getCurrentBalance, roundCurrency, thousands_separators } from '../common/utils'
import AccountInterface from '../interfaces/AccountInterface'

const AccountScreen = ({ navigation, route }: any) => {
    const [account, setAccount] = useState<AccountInterface>()
    const [currentBalance, setCurrentBalance] = useState<number>(0)
    const isFocused = useIsFocused()

    const setAccountFromDb = async () => {
        const account = await getAccount(route.params.id)
        setAccount(account)
    }

    const deleteAccountFromDb = async () => {
        await deleteAccount(route.params.id)
        console.log('Account deleted')
        navigation.navigate('AccountList')
    }

    useEffect(() => {
        if (isFocused) {
            setAccountFromDb()
        }
    }, [isFocused])

    useEffect(() => {
        if (!account) {
            return
        }
        setCurrentBalance(getCurrentBalance(account))
    }, [account])

    const onDeleteItemPress = () => {
        Alert.alert(
            'Delete',
            'Delete this account and all associated records ?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel pressed'),
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => deleteAccountFromDb()
                }
            ]
        )
    }

    return (
        <View>
            <Header
                leftComponent={{ onPress: () => navigation.navigate('Menu'), 'icon': 'menu' }}
                centerComponent={{ text: 'Account Detail' }}
            />
            <ScrollView >
                {account && <PricingCard
                    color="#3e3b33"
                    title={account.name}
                    price={thousands_separators(roundCurrency(currentBalance))}
                    button={{ title: 'Delete', onPress: () => onDeleteItemPress() }}
                />}
            </ScrollView>
        </View>
    )
}

export default AccountScreen

const styles = StyleSheet.create({})
