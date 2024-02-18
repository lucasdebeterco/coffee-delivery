import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

import { PaymentType } from '../../contexts/PaymentContext.tsx'
import doneIllustration from './assets/doneIllustration.svg'
import {
    CheckoutDoneContainer,
    DadosEntrega,
    DadosEntregaIcon,
    ItemDadosEntrega,
    PedidoConfirmado,
    PedidoConfirmadoTitle
} from './styles.ts'

const PaymentTypeNames = {
    [PaymentType.CARTAO_CREDITO]: 'Cartão de Crédito',
    [PaymentType.CARTAO_DEBITO]: 'Cartão de Débito',
    [PaymentType.DINHEIRO]: 'Dinheiro'
}

export function Done() {
    const checkoutDoneData = localStorage.getItem('checkoutDoneData')
    const {selectedPaymentOption, adress} = checkoutDoneData && JSON.parse(checkoutDoneData)
    const PaymentOptionName = PaymentTypeNames[selectedPaymentOption as keyof typeof PaymentTypeNames]

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
                            <span>Entrega em <strong>Rua {adress.rua}, {adress.numero}</strong></span>
                            <span>{adress.bairro} - {adress.cidade}, {adress.uf}</span>
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
                            <strong>{PaymentOptionName}</strong>
                        </div>
                    </ItemDadosEntrega>
                </DadosEntrega>
            </PedidoConfirmado>

            <img src={doneIllustration} alt="" />
        </CheckoutDoneContainer>
    )
}