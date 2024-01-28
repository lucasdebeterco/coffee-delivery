import styled from 'styled-components'

export const CheckoutDoneContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

export const PedidoConfirmado = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const PedidoConfirmadoTitle = styled.div`
    display: flex;
    flex-direction: column;
    
    h1 {
        color: ${(props) => props.theme['yellow-dark']};
        font-size: 2rem;
    }
    
    .subTitle {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1.3rem;
    }
`

export const DadosEntrega = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    
    min-width: 586px;
    padding: 40px;
    
    background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #C47F17, #4B2995) border-box;
    border-radius: 6px 36px;
    border: 1px solid transparent;
`

export const ItemDadosEntrega = styled.div`
    display: flex;
    gap: 12px;
    
    .dadosEntregaInfo {
        display: flex;
        flex-direction: column;
    }
`

const ENTREGA_COLORS = {
    purple: 'purple',
    yellow: 'yellow',
    yellowDark: 'yellow-dark',
}

interface DadosEntregaIconProps {
    variant: keyof typeof ENTREGA_COLORS
}

export const DadosEntregaIcon = styled.div<DadosEntregaIconProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;
    
    background: ${(props) => props.theme[ENTREGA_COLORS[props.variant]]};
    border-radius: 50%;
`