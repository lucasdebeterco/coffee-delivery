import styled from 'styled-components'

export const BannerAreaContainer = styled.div`
    display: flex;
    gap: 80px;
    
    h1 {
        margin-bottom: 16px;
        
        line-height: 58px;
        font-size: 3rem;
        color: ${(props) => props.theme['base-title']};
    }
    
    .subTitle {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1.3rem;
    }
`

export const BenefitsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 16px;

    margin-top: 66px;
`

interface BenefitItemProps {
    color: 'yellow' | 'yellow-dark' | 'purple' | 'base-text'
}

export const BenefitItem = styled.div<BenefitItemProps>`
    display: flex;
    align-items: center;
    gap: 0.4rem;

    .benefitImage {
        display: flex;
        justify-content: center;
        align-items: center;
        
        width: 32px;
        height: 32px;

        background: ${(props) => props.theme[props.color]};
        border-radius: 50%;
    }
`
