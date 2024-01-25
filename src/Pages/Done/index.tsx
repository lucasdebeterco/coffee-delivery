import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

import doneIllustration from './assets/doneIllustration.svg'
import {
    CheckoutDoneContainer,
    DadosEntrega,
    DadosEntregaIcon,
    ItemDadosEntrega,
    PedidoConfirmado,
    PedidoConfirmadoTitle
} from './styles.ts'

export function Done() {
    return (
        <CheckoutDoneContainer>
            <PedidoConfirmado>
                <PedidoConfirmadoTitle>
                    <h1>Uhu! Pedido confirmado</h1>
                    <span className="subTitle">Agora é só aguardar que logo o café chegará até você</span>
                </PedidoConfirmadoTitle>

                <DadosEntrega>
                    <ItemDadosEntrega>
                        <DadosEntregaIcon variant="purple">
                            <MapPin weight="fill" color="#fff" />
                        </DadosEntregaIcon>
                        <div className="dadosEntregaInfo">
                            <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></span>
                            <span>Farrapos - Porto Alegre, RS</span>
                        </div>
                    </ItemDadosEntrega>
                    <ItemDadosEntrega>
                        <DadosEntregaIcon variant="yellow">
                            <Timer weight="fill" color="#fff" />
                        </DadosEntregaIcon>
                        <div className="dadosEntregaInfo">
                            <span>Previsão de entrega</span>
                            <strong>20 min - 30 min</strong>
                        </div>
                    </ItemDadosEntrega>
                    <ItemDadosEntrega>
                        <DadosEntregaIcon variant="yellowDark">
                            <CurrencyDollar color="#fff" />
                        </DadosEntregaIcon>
                        <div className="dadosEntregaInfo">
                            <span>Pagamento na entrega</span>
                            <strong>Cartão de Crédito</strong>
                        </div>
                    </ItemDadosEntrega>
                </DadosEntrega>
            </PedidoConfirmado>

            <img src={doneIllustration} alt="" />
        </CheckoutDoneContainer>
    )
}