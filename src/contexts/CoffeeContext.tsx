import { createContext, ReactNode, useState } from 'react'

import { ICoffee } from '../@types/coffee.ts'

interface ICoffeeContext {
    cart: ICoffee[]
    setCartItems: (coffee: number, qtd: number) => void
}

export const CoffeeContext = createContext({} as ICoffeeContext)

interface ICoffeeContextProviderProps {
    children: ReactNode
}

export function CoffeeContextProvider({children}: ICoffeeContextProviderProps) {
    const [cart, /*setCart*/] = useState([])



    function setCartItems(coffee: number, qtd: number) {
        console.log(coffee, qtd)
    }

    return (
        <CoffeeContext.Provider value={{ cart, setCartItems }}>
            {children}
        </CoffeeContext.Provider>
    )
}