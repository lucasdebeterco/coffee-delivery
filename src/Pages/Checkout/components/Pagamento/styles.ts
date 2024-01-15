import styled from 'styled-components';

export const PagamentoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;

    border-radius: 6px;
    background: ${(props) => props.theme['base-card']};
`

export const PaymentOptionsArea = styled.div`
    display: flex;
    gap: 12px;
    
    button {
        display: flex;
        place-items: center;
        gap: 12px;
        padding: 16px;
        
        background: ${(props) => props.theme['base-button']};
        border-radius: 6px;
        border: 0;
        
        text-transform: uppercase;
        font-size: 0.75rem;
    }
    
`