import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 54px;
    
    h2 {
        font-size: 2rem;
        color: ${(props) => props.theme['base-subtitle']};
    }
    
    .coffeeList {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(272px, 1fr));
        gap: 32px;
        place-items: center;
    }
`