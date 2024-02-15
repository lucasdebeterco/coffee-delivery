import styled from 'styled-components'

export const CartItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 24px 0;
    border-bottom: 1px solid ${(props) => props.theme['base-button']};
    
    .priceItem {
        white-space: nowrap;
    }
    
    &:first-child {
        padding-top: 0;
    }
`

export const ItemDataWrapper = styled.div`
    display: flex;

    img {
        max-width: 64px;
        height: auto;
        margin-right: 20px;
    }
    
    .titleActionsArea {
        display: flex;
        flex-direction: column;
        gap: 8px;
        
        user-select: none;
    }

    .itemTitle {
        color: ${(props) => props.theme['base-subtitle']};
    }
`

export const ActionsAreaWrapper = styled.div`
    display: flex;
    gap: 8px;
    
    .quantityArea {
        display: flex;
        place-items: center;
        padding: 8px;
        gap: 8px;
        
        border-radius: 6px;
        background: ${(props) => props.theme['base-button']};

        svg {
            cursor: pointer;
        }
    }
    
    button {
        display: flex;
        place-items: center;
        padding: 8px;
        gap: 6px;
        
        font-size: 0.875rem;
        border-radius: 6px;
        background: ${(props) => props.theme['base-button']};
    
        cursor: pointer;
        transition: all .15s ease;
        
        
        &:hover {
            background: ${(props) => props.theme['purple-light']};
        } 
    }
`