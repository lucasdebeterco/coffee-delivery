import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 32px 0;
`

export const HeaderInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    .headerInfo {
        display: flex;
        place-items: center;
        height: 2.375rem;
        padding: 0.5rem;
        border-radius: 8px;
        color: ${(props) => props.theme['purple-dark']};
        font-size: 0.875rem;
    }

    .location {
        display: flex;
        gap: 0.25rem;
        background: ${(props) => props.theme['purple-light']};
        color: ${(props) => props.theme['purple-dark']};
    }
    
    .cart {
        position: relative;
        background: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme['yellow-dark']};
    }
    
    .cartCount {
        position: absolute;
        top: -8px;
        right: -8px;
        display: flex;
        justify-content: center;
        align-items: center;
        
        width: 20px;
        height: 20px;
        font-size: 0.75rem;
        
        border-radius: 50%;
        background: ${(props) => props.theme['yellow-dark']};
        color: #fff;
        font-weight: bold;
    }
`