import styled from 'styled-components'

export const CheckoutContainer = styled.form`
    display: flex;
    gap: 32px;
`

interface CheckoutCardContainerProps {
    hasCustomBorderRadius?: boolean
}

export const CheckoutCardContainer = styled.div<CheckoutCardContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;
    
    border-radius: ${(props) => props.hasCustomBorderRadius ? '6px 36px' : '6px'};
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
