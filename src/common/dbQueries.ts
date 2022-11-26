import AsyncStorage from "@react-native-async-storage/async-storage"
import AccountInterface from "../interfaces/AccountInterface"
import CategoryInterface from "../interfaces/CategoryInterface"

export const addAccount = async (account: AccountInterface): Promise<boolean> => {
    if (account) {
        try {
            const jsonValue = await AsyncStorage.getItem('@accounts')
            const result = jsonValue != null ? JSON.parse(jsonValue) : []
            result.push(account)
            await AsyncStorage.setItem('@accounts', JSON.stringify(result))
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    return false
}

export const getAccounts = async (): Promise<AccountInterface[]> => {
    try {
        const jsonValue = await AsyncStorage.getItem('@accounts')
        return jsonValue != null ? JSON.parse(jsonValue) : []
    } catch (error) {
        console.log(error)
        return []
    }
}

export const getAccount = async (id: string): Promise<AccountInterface|undefined> => {
    try {
        const jsonValue = await AsyncStorage.getItem('@accounts')
        const accounts = jsonValue != null ? JSON.parse(jsonValue) : []
        return accounts.find((data: AccountInterface) => data.id === id)
    } catch (error) {
        console.log(error)
        return
    }
}

export const getAccountByName = async (name: string): Promise<AccountInterface | undefined> => {
    try {
        const jsonValue = await AsyncStorage.getItem('@accounts')
        const accounts = jsonValue != null ? JSON.parse(jsonValue) : []
        return accounts.find((data: AccountInterface) => data.name === name)
    } catch (error) {
        console.log(error)
        return
    }
}


export const deleteAccount = async (id: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem('@accounts')
        const accounts = jsonValue != null ? JSON.parse(jsonValue) : []
        const result = accounts.find((data: AccountInterface) => data.id !== id)
        await AsyncStorage.setItem('@accounts', JSON.stringify(result))
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

//Categories
export const addCategory = async (category: CategoryInterface): Promise<boolean> => {
    if (category) {
        try {
            const jsonValue = await AsyncStorage.getItem('@categories')
            const result = jsonValue != null ? JSON.parse(jsonValue) : []
            result.push(category)
            await AsyncStorage.setItem('@categories', JSON.stringify(result))
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    return false
}

export const getCategories = async (): Promise<CategoryInterface[]> => {
    try {
        const jsonValue = await AsyncStorage.getItem('@categories')
        return jsonValue != null ? JSON.parse(jsonValue) : []
    } catch (error) {
        console.log(error)
        return []
    }
}

export const getCategory = async (id: string): Promise<CategoryInterface|undefined> => {
    try {
        const jsonValue = await AsyncStorage.getItem('@categories')
        const categories = jsonValue != null ? JSON.parse(jsonValue) : []
        return categories.find((data: CategoryInterface) => data.id === id)
    } catch (error) {
        console.log(error)
        return
    }
}

export const getCategoryByName = async (name: string): Promise<CategoryInterface | undefined> => {
    try {
        const jsonValue = await AsyncStorage.getItem('@categories')
        const categories = jsonValue != null ? JSON.parse(jsonValue) : []
        return categories.find((data: CategoryInterface) => data.name === name)
    } catch (error) {
        console.log(error)
        return
    }
}


export const deleteCategory = async (id: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem('@categories')
        const categories = jsonValue != null ? JSON.parse(jsonValue) : []
        const result = categories.find((data: CategoryInterface) => data.id !== id)
        await AsyncStorage.setItem('@categories', JSON.stringify(result))
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}