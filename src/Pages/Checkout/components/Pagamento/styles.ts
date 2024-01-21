import styled from 'styled-components'

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

        cursor: pointer;
        transition: all .2s ease;
        
        &:hover {
            background: ${(props) => props.theme['purple-light']};
        }
    }
    
`