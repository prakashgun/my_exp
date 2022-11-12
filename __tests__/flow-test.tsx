import {render, screen, fireEvent, waitFor} from '@testing-library/react-native'
import { act } from 'react-test-renderer'
import App from '../App'

jest.useFakeTimers()


describe('Main flow', ()=>{
    test('Shows correct title',()=>{
        const {getByText} = render(<App />)

        act(()=>{
            jest.runAllTimers()
        })

        expect(getByText('Accounts')).toBeTruthy()
        expect(getByText('Add')).toBeTruthy()
    })

    test('Go to add screen', async()=>{
        const {getByText} = render(<App />)

        act(()=>{
            jest.runAllTimers()
        })

        fireEvent(await getByText('Add'), 'press')
        expect(await getByText('Add Account')).toBeTruthy()
    })

})