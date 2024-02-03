import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    padding: 20px;

    background: ${(props) => props.theme['base-card']};
    border-radius: 6px 36px;
    
    h3 {
        font-size: 1.3rem;
        color: ${(props) => props.theme['base-subtitle']};
    }
    
    .coffeeSubtitle {
        margin-bottom: 32px;
        padding: 0 4px;
        
        text-align: center;
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-label']};
    }
`

export const CoffeeImageContainer = styled.div`
    display: flex;
    justify-content: center;
    min-height: 90px;
    
    img {
        position: absolute;
        top: -30px;
        max-width: 120px;
        height: auto;
    }
`

export const CoffeeItemTypesWrapper = styled.div`
    display: flex;
    gap: 4px;
    margin-bottom: 16px;
    
    strong {
        padding: 4px 8px;
        
        text-transform: uppercase;
        font-size: 0.625rem;
        color: ${(props) => props.theme['yellow-dark']};
        
        background: ${(props) => props.theme['yellow-light']};
        border-radius: 100px;
    }
`

export const CoffeeItemPrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    .qtdSelectorBuy {
        display: flex;
        gap: 0.5rem;
    }
    
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        
        padding: 0.5rem;
        background: ${(props) => props.theme['purple']};
        border-radius: 8px;
        
        
        transition: background .15s ease;
        
        &:hover {
            background: ${(props) => props.theme['purple-dark']};
        }
    }
`

export const CoffeePrice = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    
    .pricePrefix {
        font-size: 0.875rem;
    }
    
    .price {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.5rem;
    } 
`

export const ItemQuantitySelector = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    
    padding: 2px 10px;
    
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    overflow: hidden;
    user-select: none;
    
    svg {
        cursor: pointer;
    }
`




































