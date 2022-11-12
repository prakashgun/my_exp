import {render} from '@testing-library/react-native'
import { act } from 'react-test-renderer'
import App from '../App'

describe('Main flow', ()=>{
    it('Shows correct title',()=>{
        jest.useFakeTimers()
        const {getByText} = render(<App />)

        act(()=>{
            jest.runAllTimers()
        })

        expect(getByText('Accounts')).toBeTruthy()
        expect(getByText('Add')).toBeTruthy()
    })
})