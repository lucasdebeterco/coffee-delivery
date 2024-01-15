import { CheckoutCardHeaderContainer } from './styles.ts';
import { ReactNode } from 'react';

interface ICheckoutCardHeader {
    icon: ReactNode
    title: string
    subtitle: string
}

export function CheckoutCardHeader({icon, title, subtitle}: ICheckoutCardHeader) {
    return (
        <CheckoutCardHeaderContainer>
            {icon}
            <div className='titleWrapper'>
                <strong className='headerTitle'>{title}</strong>
                <span className='headerSubTitle'>{subtitle}</span>
            </div>
        </CheckoutCardHeaderContainer>
    )
}