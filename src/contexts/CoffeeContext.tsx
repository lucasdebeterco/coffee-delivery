import { createContext, ReactNode, useState } from 'react'

import { ICoffee } from '../@types/coffee.ts'

interface ICoffeeContext {
    cart: ICoffee[]
    setCartItems: () => void
}

export const CoffeeContext = createContext({} as ICoffeeContext)

interface ICoffeeContextProviderProps {
    children: ReactNode
}

export function CoffeeContextProvider({children}: ICoffeeContextProviderProps) {
    const [cart, /*setCart*/] = useState([])

    function setCartItems() {
        console.log('setando carrinho')
    }

    return (
        <CoffeeContext.Provider value={{ cart, setCartItems }}>
            {children}
        </CoffeeContext.Provider>
    )
}