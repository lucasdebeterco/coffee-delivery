import styled from 'styled-components'

export const CheckoutCardHeaderContainer = styled.div`
    display: flex;
    gap: 8px;

    .titleWrapper {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .headerTitle {
        color: ${(props) => props.theme['base-subtitle']};
    }

    .headerSubTitle {
        font-size: 0.875rem;
    }
`