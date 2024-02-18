import { createContext, ReactNode, useState } from 'react'

export interface IAdress {
    cep: string
    rua: string
    numero: number
    complemento: string
    bairro: string
    cidade: string
    uf: string
}

interface IAdressContext {
    adress: IAdress | null
    handleSetAdress: (adress: IAdress | null) => void
}

export const AdressContext = createContext({} as IAdressContext)

interface AdressContextProviderProps {
    children: ReactNode
}

export function AdressContextProvider({children}: AdressContextProviderProps) {
    const [adress, setAdress] = useState<IAdress | null>(null)

    function handleSetAdress(adressFormData: IAdress | null) {
        setAdress(adressFormData)
    }

    return (
        <AdressContext.Provider value={{adress, handleSetAdress}}>
            {children}
        </AdressContext.Provider>
    )
}