import { NavigationContainer } from '@react-navigation/native'
import {render, screen, fireEvent, waitFor} from '@testing-library/react-native'
import { act } from 'react-test-renderer'
import App from '../App'
import AccountList from '../src/components/AccountList'

jest.useFakeTimers()

describe('Main flow', ()=>{
    test('Shows correct title',()=>{
        render(<App />)

        act(()=>{
            jest.runAllTimers()
        })

        expect(screen.getByText('Accounts')).toBeTruthy()
        expect(screen.getByText('Add')).toBeTruthy()
    })

    test('Go to add screen', ()=>{
        render(<App />)

        act(()=>{
            jest.runAllTimers()
        })

        fireEvent(screen.getByText('Add'), 'press')
        expect(screen.getByText('Add Account')).toBeTruthy()
    })

    test('Account name validation', ()=>{
        render(<App />)

        act(()=>{
            jest.runAllTimers()
        })

        fireEvent.press(screen.getByText('Add'))
        fireEvent.press(screen.getByText('Save'))

        expect(screen.getByText('Name should have atleast two characters')).toBeTruthy()
    })

    test('Account balance validation', ()=>{
        render(<App />)

        act(()=>{
            jest.runAllTimers()
        })

        fireEvent.press(screen.getByText('Add'))
        fireEvent.changeText(screen.getByLabelText('Name'), 'Bank 1')
        fireEvent.press(screen.getByText('Save'))

        expect(screen.getByText('Account balance cannot be empty')).toBeTruthy()
    })
    
    test('Saving account', async ()=>{
        render(<App />)

        act(()=>{
            jest.runAllTimers()
        })

        fireEvent.press(screen.getByText('Add'))
        fireEvent.changeText(screen.getByLabelText('Name'), 'Bank 1')
        fireEvent.changeText(screen.getByLabelText('Balance'), '1000')
        fireEvent.press(screen.getByText('Save'))

        expect(await screen.findByText('Accounts')).toBeTruthy()
        expect(await screen.getByText('Bank 1')).toBeTruthy()
        expect(await screen.getByText('Add')).toBeTruthy()
    })

    // test('Detailed account', async ()=>{
    //     render(<NavigationContainer>
    //         <AccountList />
    //     </NavigationContainer>)

    //     act(()=>{
    //         jest.runAllTimers()
    //     })

    //     fireEvent.press(screen.getByText('Bank 1'))

    //     expect(await screen.findByText('Account Detail')).toBeTruthy()


    // })
})