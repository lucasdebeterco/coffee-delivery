import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react';
import { PagamentoContainer, PaymentOptionsArea } from './styles.ts';

export function Pagamento() {
    return (
        <PagamentoContainer>
            <div>
                <CurrencyDollar size={22} color='#8047F8'/>
                <div>
                    <strong>Pagamento</strong>
                    <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                </div>
            </div>

            <PaymentOptionsArea>
                <button>
                    <CreditCard size={16} color='#8047F8' />
                    Cartão de Crédito
                </button>
                <button>
                    <Bank size={16} color='#8047F8' />
                    Cartão de Débito
                </button>
                <button>
                    <Money size={16} color='#8047F8' />
                    Dinheiro
                </button>
            </PaymentOptionsArea>
        </PagamentoContainer>
    )
}