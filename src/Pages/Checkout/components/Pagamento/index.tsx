import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import { CheckoutCardContainer } from '../../styles.ts'
import { CheckoutCardHeader } from '../CheckoutCardHeader'
import { PaymentOptionsArea } from './styles.ts'

export function Pagamento() {
    const theme = useTheme()

    return (
        <CheckoutCardContainer>
            <CheckoutCardHeader
                icon={<CurrencyDollar size={22} color={theme['purple']}/>}
                title="Pagamento"
                subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            />

            <PaymentOptionsArea>
                <button>
                    <CreditCard size={16} color={theme['purple']} />
                    Cartão de Crédito
                </button>
                <button>
                    <Bank size={16} color={theme['purple']} />
                    Cartão de Débito
                </button>
                <button>
                    <Money size={16} color={theme['purple']} />
                    Dinheiro
                </button>
            </PaymentOptionsArea>
        </CheckoutCardContainer>
    )
}