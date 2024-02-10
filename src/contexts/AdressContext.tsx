import { createContext, ReactNode, useState } from 'react'

interface IAdress {
    cep: string
}

interface IAdressContext {
    adress: IAdress | null
    handleSetAdress: (adress: IAdress) => void
}

export const AdressContext = createContext({} as IAdressContext)

interface AdressContextProviderProps {
    children: ReactNode
}

export function AdressContextProvider({children}: AdressContextProviderProps) {
    const [adress, setAdress] = useState<IAdress>(null)

    function handleSetAdress(props: IAdress) {
        console.log('aaa')
    }

    return (
        <AdressContext.Provider value={{adress, handleSetAdress}}>
            {children}
        </AdressContext.Provider>
    )
}