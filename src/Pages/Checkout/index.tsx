import { EnderecoEntrega } from './components/EnderecoEntrega';
import { Pagamento } from './components/Pagamento';
import { Resumo } from './components/Resumo';
import { CheckoutContainer } from './styles.ts';

export function Checkout() {
    return (
        <CheckoutContainer>
            <div>
                Complete seu pedido
                <EnderecoEntrega />
                <Pagamento />
            </div>

            <div>
                Cafés selecionados
                <Resumo />
            </div>
        </CheckoutContainer>
    )
}