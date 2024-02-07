import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { useState } from 'react'
import { useTheme } from 'styled-components'

import { CheckoutCardContainer } from '../../styles.ts'
import { CheckoutCardHeader } from '../CheckoutCardHeader'
import { PaymentOptionsArea } from './styles.ts'

enum PaymentType {
    CARTAO_CREDITO,
    CARTAO_DEBITO,
    DINHEIRO
}

export function Pagamento() {
    const theme = useTheme()
    const [selectedPayment, setSelectedPayment] = useState<number | null>(null)

    return (
        <CheckoutCardContainer>
            <CheckoutCardHeader
                icon={<CurrencyDollar size={22} color={theme['purple']}/>}
                title="Pagamento"
                subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            />

            <PaymentOptionsArea>
                <button
                    onClick={() => setSelectedPayment(PaymentType.CARTAO_CREDITO)}
                    className={selectedPayment === PaymentType.CARTAO_CREDITO ? 'selected' : ''}
                >
                    <CreditCard size={16} color={theme['purple']} />
                    Cartão de Crédito
                </button>
                <button
                    onClick={() => setSelectedPayment(PaymentType.CARTAO_DEBITO)}
                    className={selectedPayment === PaymentType.CARTAO_DEBITO ? 'selected' : ''}
                >
                    <Bank size={16} color={theme['purple']} />
                    Cartão de Débito
                </button>
                <button
                    onClick={() => setSelectedPayment(PaymentType.DINHEIRO)}
                    className={selectedPayment === PaymentType.DINHEIRO ? 'selected' : ''}
                >
                    <Money size={16} color={theme['purple']} />
                    Dinheiro
                </button>
            </PaymentOptionsArea>
        </CheckoutCardContainer>
    )
}