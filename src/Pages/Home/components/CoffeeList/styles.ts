import styled from 'styled-components';

export const CoffeeListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 54px;
    
    .coffeeList {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 32px;
    }
`