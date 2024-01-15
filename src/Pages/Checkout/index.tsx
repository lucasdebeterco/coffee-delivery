import { EnderecoEntrega } from './components/EnderecoEntrega';
import { Pagamento } from './components/Pagamento';
import { Resumo } from './components/Resumo';
import { CheckoutContainer, CheckoutSection, SectionTitle } from './styles.ts';

export function Checkout() {
    return (
        <CheckoutContainer>
            <CheckoutSection>
                <SectionTitle>Complete seu pedido</SectionTitle>
                <EnderecoEntrega/>
                <Pagamento/>
            </CheckoutSection>

            <CheckoutSection>
                <SectionTitle>Cafés selecionados</SectionTitle>
                <Resumo />
            </CheckoutSection>
        </CheckoutContainer>
    )
}