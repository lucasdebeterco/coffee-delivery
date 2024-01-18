import styled from 'styled-components'

export const CheckoutContainer = styled.div`
    display: flex;
    gap: 32px;
`

export const CheckoutSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const SectionTitle = styled.strong`
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
`