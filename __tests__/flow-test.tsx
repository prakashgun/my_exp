import { fireEvent, render, screen } from '@testing-library/react-native'
import { Alert } from 'react-native'
import { act } from 'react-test-renderer'
import App from '../App'

jest.useFakeTimers()

jest.mock('../src/common/dbQueries', () => {
    const originalModule = jest.requireActual('../src/common/dbQueries');

    const accounts = [
        {
            id: '1',
            name: 'Bank 1',
            initial_balance: 1000
        }
    ]    
    
    const categories = [
        {
            id: '1',
            name: 'Transportation',
            initial_balance: 200
        },
        {
            id: '2',
            name: 'Food',
            initial_balance: 150
        },
    ]

    //Mock the default export and named export 'foo'
    return {
        __esModule: true,
        ...originalModule,
        default: jest.fn(() => ''),
        getAccounts: jest.fn(() => accounts),
        getAccount: jest.fn(() => accounts[0]),
        getCategories: jest.fn(() => categories),
        setAccount: jest.fn(() => '')
    };

})


describe('Main flow', () => {
    test('Shows correct title', () => {
        render(<App />)

        act(() => {
            jest.runAllTimers()
        })

        expect(screen.getByText('Accounts')).toBeTruthy()
        expect(screen.getByText('Add')).toBeTruthy()
    })

    test('Go to add screen', () => {
        render(<App />)

        act(() => {
            jest.runAllTimers()
        })

        fireEvent(screen.getByText('Add'), 'press')
        expect(screen.getByText('Add Account')).toBeTruthy()
    })

    test('Account name validation', () => {
        render(<App />)

        act(() => {
            jest.runAllTimers()
        })

        fireEvent.press(screen.getByText('Add'))
        fireEvent.press(screen.getByText('Save'))

        expect(screen.getByText('Name should have atleast two characters')).toBeTruthy()
    })

    test('Account balance validation', () => {
        render(<App />)

        act(() => {
            jest.runAllTimers()
        })

        fireEvent.press(screen.getByText('Add'))
        fireEvent.changeText(screen.getByLabelText('Name'), 'Bank 1')
        fireEvent.press(screen.getByText('Save'))

        expect(screen.getByText('Account balance cannot be empty')).toBeTruthy()
    })

    test('Saving account', async () => {
        render(<App />)

        act(() => {
            jest.runAllTimers()
        })

        fireEvent.press(screen.getByText('Add'))
        fireEvent.changeText(screen.getByLabelText('Name'), 'Bank 1')
        fireEvent.changeText(screen.getByLabelText('Balance'), '1000')
        fireEvent.press(screen.getByText('Save'))

        expect(await screen.findByText('Accounts')).toBeTruthy()

        // screen.debug()
        expect(await screen.getByText('Bank 1')).toBeTruthy()
        expect(await screen.getByText('1,000')).toBeTruthy()
        expect(await screen.getByText('Add')).toBeTruthy()
    })

    test('Detailed account', async () => {
        render(<App />)

        act(() => {
            jest.runAllTimers()
        })

        fireEvent.press(screen.getByText('Bank 1'))


        expect(await screen.findByText('Account Details')).toBeTruthy()

    })

    test('Delete account', async () => {
        render(<App />)

        act(() => {
            jest.runAllTimers()
        })

        jest.spyOn(Alert, 'alert')

        fireEvent.press(screen.getByText('Bank 1'))
        fireEvent.press(await screen.findByText('Delete'))

        expect(Alert.alert).toBeCalled()
    })

    test('Go to Menu', async ()=>{
        render(<App />)

        act(()=>{
            jest.runAllTimers()
        })

        expect(await screen.findByText('Accounts')).toBeTruthy()
        fireEvent.press(screen.getByTestId('menu'))
        expect(await screen.getByText('Categories')).toBeTruthy()
    })

    test('Go to category list', async ()=>{
        render(<App />)

        act(()=>{
            jest.runAllTimers()
        })

        fireEvent.press(screen.getByTestId('menu'))
        fireEvent.press(screen.getByText('Categories'))
        expect(await screen.findByText('Category Items')).toBeTruthy()
        expect(await screen.getByText('Transportation')).toBeTruthy()
        expect(await screen.getByText('Food')).toBeTruthy()
    })

    test('Go to category detail', async ()=>{
        render(<App />)

        act(()=>{
            jest.runAllTimers()
        })

        fireEvent.press(screen.getByTestId('menu'))
        fireEvent.press(screen.getByText('Categories'))
        fireEvent.press(await screen.findByText('Food'))
    })
})