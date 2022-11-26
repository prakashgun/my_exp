import { useIsFocused, useNavigation } from '@react-navigation/native'
import { Button, Header, Icon } from '@rneui/base'
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { getCategories } from '../common/dbQueries'
import CategoryInterface from '../interfaces/CategoryInterface'
import CategoryItem from './CategoryItem'
import CommonHeader from './CommonHeader'


const CategoryList = () => {

    const navigation = useNavigation<any>()
    const [categories, setCategories] = useState<CategoryInterface[]>()
    const isFocused = useIsFocused()

    const setCategoriesFromDb = async () => {
        setCategories(await getCategories())
    }

    useEffect(() => {
        if (isFocused) {
            setCategoriesFromDb()
        }
    }, [isFocused])

    return (
        <View style={styles.container}>
            <CommonHeader heading="Categories" />

            <ScrollView>
                {
                    categories && categories.map((category) => (
                        <CategoryItem
                            category={category}
                            key={category.id}
                            onPress={() => {
                                return navigation.navigate('CategoryScreen', { id: category.id })
                            }}
                        />
                    ))
                }
            </ScrollView>
            <Button title="Add" onPress={() => navigation.navigate('AddCategory')} />
        </View>
    )
}

export default CategoryList

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})