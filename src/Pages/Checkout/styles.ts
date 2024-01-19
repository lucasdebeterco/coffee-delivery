import styled from 'styled-components'

export const CheckoutContainer = styled.div`
    display: flex;
    gap: 32px;
`

export const CheckoutCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;
    
    border-radius: 6px;
    background: ${(props) => props.theme['base-card']};
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