
import { createContext } from 'react'

export const UserContext = createContext({
    name: 'user',
    token: 'some number'
})

export default UserContext