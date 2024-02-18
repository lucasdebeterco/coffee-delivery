import { createContext, ReactNode, useState } from 'react'
import toast from 'react-hot-toast'

import { coffees } from '../data/coffees.ts'

export interface ICart {
    [key: number]: number
}

interface ICoffeeContext {
    cart: ICart | undefined
    setCartItems: (coffeeId: number, qtd: number) => void
    removeCartItem: (coffeeId: number) => void
    changeCartItemQuantity: (coffeeId: number, qtd: number) => void
    cleanCart: () => void
}

export const CoffeeContext = createContext({} as ICoffeeContext)

interface ICoffeeContextProviderProps {
    children: ReactNode
}

export function CoffeeContextProvider({children}: ICoffeeContextProviderProps) {
    const savedCart = localStorage.getItem('cartItems')
    const initialCart = savedCart ? JSON.parse(savedCart) : {}
    const [cart, setCart] = useState<ICart>(initialCart)

    function setCartItems(coffeeId: number, itemQtd: number) {
        setCart((prevState) => {
            const newState = { ...prevState }
            newState[coffeeId] = itemQtd

            saveItemsInStorage(newState)
            return newState
        })

        toast.success(`${coffees[coffeeId].title} adicionado ao carrinho!`)
    }

    function removeCartItem(coffeeId: number) {
        setCart((prevState) => {
            const newState = { ...prevState }
            delete newState[coffeeId]

            saveItemsInStorage(newState)
            return newState
        })

        toast.success(`Item ${coffees[coffeeId].title} removido do carrinho ao carrinho!`)
    }

    function changeCartItemQuantity(coffeeId: number, qtd: number) {
        setCart((prevState) => {
            const newState = { ...prevState }
            newState[coffeeId] = newState[coffeeId] + qtd <= 1 ? 1 : newState[coffeeId] + qtd

            saveItemsInStorage(newState)
            return newState
        })
    }

    function saveItemsInStorage(newState: ICart) {
        localStorage.setItem('cartItems', JSON.stringify(newState))
    }

    function cleanCart() {
        localStorage.removeItem('cartItems')
        setCart({})
    }

    return (
        <CoffeeContext.Provider value={{
            cart,
            setCartItems,
            removeCartItem,
            changeCartItemQuantity,
            cleanCart
        }}>
            {children}
        </CoffeeContext.Provider>
    )
}