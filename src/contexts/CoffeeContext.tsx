import { createContext, ReactNode, useState } from 'react'
import toast from 'react-hot-toast'

interface ICart {
    [key: number]: number
}

interface ICoffeeContext {
    cart: ICart | undefined
    setCartItems: (coffeeId: number, qtd: number) => void
}

export const CoffeeContext = createContext({} as ICoffeeContext)

interface ICoffeeContextProviderProps {
    children: ReactNode
}

export function CoffeeContextProvider({children}: ICoffeeContextProviderProps) {
    const [cart, setCart] = useState<ICart>({})

    function setCartItems(coffeeId: number, itemQtd: number) {
        setCart((prevState) => {
            const newState = { ...prevState }

            newState[coffeeId] = itemQtd
            return newState
        })

        toast.success('Adicionado ao carrinho!')
    }

    return (
        <CoffeeContext.Provider value={{ cart, setCartItems }}>
            {children}
        </CoffeeContext.Provider>
    )
}