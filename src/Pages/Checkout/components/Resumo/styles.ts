import styled from 'styled-components'

export const CartItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const PriceArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    
    .priceInfo {
        display: flex;
        justify-content: space-between;
        font-size: 0.875rem;
        
        &.totalArea {
            font-weight: bold;
            font-size: 1.3rem;
        }
    }
`

export const ConfirmCheckoutButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    padding: 0.75rem;
    
    border-radius: 6px;
    color: ${(props) => props.theme['white']};
    background: ${(props) => props.theme['yellow']};
    
    cursor: pointer;
    transition: all .2s ease;
    
    &:hover {
        background: ${(props) => props.theme['yellow-dark']};
    }
`