import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'

import { PaymentContext, PaymentType } from '../../../../contexts/PaymentContext.tsx'
import { CheckoutCardContainer } from '../../styles.ts'
import { CheckoutCardHeader } from '../CheckoutCardHeader'
import { PaymentOptionsArea } from './styles.ts'


export function Pagamento() {
    const theme = useTheme()
    const {selectedPaymentOption, handlePaymentOptionChange} = useContext(PaymentContext)

    return (
        <CheckoutCardContainer>
            <CheckoutCardHeader
                icon={<CurrencyDollar size={22} color={theme['purple']}/>}
                title="Pagamento"
                subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            />

            <PaymentOptionsArea>
                <button
                    onClick={() => handlePaymentOptionChange(PaymentType.CARTAO_CREDITO)}
                    className={selectedPaymentOption === PaymentType.CARTAO_CREDITO ? 'selected' : ''}
                >
                    <CreditCard size={16} color={theme['purple']} />
                    Cartão de Crédito
                </button>
                <button
                    onClick={() => handlePaymentOptionChange(PaymentType.CARTAO_DEBITO)}
                    className={selectedPaymentOption === PaymentType.CARTAO_DEBITO ? 'selected' : ''}
                >
                    <Bank size={16} color={theme['purple']} />
                    Cartão de Débito
                </button>
                <button
                    onClick={() => handlePaymentOptionChange(PaymentType.DINHEIRO)}
                    className={selectedPaymentOption === PaymentType.DINHEIRO ? 'selected' : ''}
                >
                    <Money size={16} color={theme['purple']} />
                    Dinheiro
                </button>
            </PaymentOptionsArea>
        </CheckoutCardContainer>
    )
}