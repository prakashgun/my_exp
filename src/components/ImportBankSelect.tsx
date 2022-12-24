import React, { useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Button, Input, ListItem, Overlay, Text } from '@rneui/base'
import ImportBankInterface from '../interfaces/ImportBankInterface'
import ImportBankSelectInterface from '../interfaces/ImportBankSelectInterface'


const ImportBankSelect = ({
    importBanks, selectedImportBank, setSelectedImportBank, inputButtonStyle
}: ImportBankSelectInterface) => {

    const [importBanksExpanded, setImportBanksExpanded] = useState<boolean>(false)

    const toggleImportBanksOverlay = () => {
        setImportBanksExpanded(!importBanksExpanded)
    }

    const onImportBankIconPress = (importBank: ImportBankInterface) => {
        setSelectedImportBank(importBank)
        setImportBanksExpanded(!importBanksExpanded)
    }

    return (
        <View style={styles.container}>
            <Button
                onPress={toggleImportBanksOverlay}
                title={`Import Type: ${selectedImportBank.name}`}
                icon={{ type: "font-awesome", name: "bank", color: 'white' }}
                buttonStyle={inputButtonStyle}
            />
            <Overlay fullScreen={true} isVisible={importBanksExpanded} onBackdropPress={toggleImportBanksOverlay}>
                <Text h4>Select Import Bank</Text>
                <ScrollView>
                    {importBanks && importBanks.map((bank, i) => (
                        <ListItem key={i} onPress={() => onImportBankIconPress(bank)} bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>{bank.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))}
                </ScrollView>
            </Overlay>
        </View>
    )
}

export default ImportBankSelect

const styles = StyleSheet.create({
    container: {
        padding: 5
    }
})
