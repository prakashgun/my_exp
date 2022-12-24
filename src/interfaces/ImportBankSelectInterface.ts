import { ViewStyle } from "react-native"
import ImportBankInterface from "./ImportBankInterface"


export default interface ImportBankSelectInterface {
    importBanks: ImportBankInterface[],
    selectedImportBank: ImportBankInterface,
    setSelectedImportBank: (type: ImportBankInterface) => void,
    inputButtonStyle: ViewStyle
}