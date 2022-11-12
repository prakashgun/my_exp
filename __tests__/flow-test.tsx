import {render, screen, fireEvent, waitFor} from '@testing-library/react-native'
import { act } from 'react-test-renderer'
import App from '../App'

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
})