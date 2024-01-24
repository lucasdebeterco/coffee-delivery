import styled from 'styled-components'

export const CheckoutDoneContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const PedidoConfirmado = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const DadosEntrega = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    
    padding: 40px;
    border: 1px solid ${(props) => props.theme['yellow-dark']};
    border-radius: 6px 36px 6px 36px;
`
