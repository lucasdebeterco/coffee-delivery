import { createContext, ReactNode, useState } from 'react'

export enum PaymentType {
    CARTAO_CREDITO,
    CARTAO_DEBITO,
    DINHEIRO
}

interface IPaymentContext {
    selectedPaymentOption: PaymentType | null
    handlePaymentOptionChange: (selectedOption: number) => void
}

export const PaymentContext = createContext({} as IPaymentContext)

interface IPaymentContextProviderProps {
    children: ReactNode
}

export function PaymentContextProvider({children}: IPaymentContextProviderProps) {
    const [selectedPaymentOption, setSelectedPaymentOption] = useState<number | null>(null)

    function handlePaymentOptionChange(selectedOption: number) {
        setSelectedPaymentOption(selectedOption)
    }

    return (
        <PaymentContext.Provider value={{selectedPaymentOption, handlePaymentOptionChange}}>
            {children}
        </PaymentContext.Provider>
    )
}