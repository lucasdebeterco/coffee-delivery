import { ReactNode } from 'react'

import { CheckoutCardHeaderContainer } from './styles.ts'

interface ICheckoutCardHeader {
    icon: ReactNode
    title: string
    subtitle: string
}

export function CheckoutCardHeader({icon, title, subtitle}: ICheckoutCardHeader) {
    return (
        <CheckoutCardHeaderContainer>
            {icon}
            <div className="titleWrapper">
                <strong className="headerTitle">{title}</strong>
                <span className="headerSubTitle">{subtitle}</span>
            </div>
        </CheckoutCardHeaderContainer>
    )
}