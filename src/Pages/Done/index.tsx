import doneIllustration from './assets/doneIllustration.svg'
import { CheckoutDoneContainer, DadosEntrega, PedidoConfirmado } from './styles.ts'

export function Done() {
    return (
        <CheckoutDoneContainer>
            <PedidoConfirmado>
                <div>
                    <strong>Uhu! Pedido confirmado</strong>
                    <span>Agora é só aguardar que logo o café chegará até você</span>
                </div>

                <DadosEntrega>
                    <div>
                        <span>Entrega em Rua João Daniel Martinelli, 102</span>
                        <strong>Farrapos - Porto Alegre, RS</strong>
                    </div>
                    <div>
                        <span>Previsão de entrega</span>
                        <strong>20 min - 30 min</strong>
                    </div>
                    <div>
                        <span>Pagamento na entrega</span>
                        <strong>Cartão de Crédito</strong>
                    </div>
                </DadosEntrega>
            </PedidoConfirmado>

            <img src={doneIllustration} alt="" />
        </CheckoutDoneContainer>
    )
}