import styled from 'styled-components'

export const CartItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    padding-right: 8px;
    max-height: 318px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    &::-webkit-scrollbar-track {
        background: ${(props) => props.theme['base-button']};
        border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme['base-hover']};
        border-radius: 6px;
    }
}
`

export const PriceArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    min-width: 338px;
    
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
    
    &:not(:disabled):hover {
        background: ${(props) => props.theme['yellow-dark']};
    }
`