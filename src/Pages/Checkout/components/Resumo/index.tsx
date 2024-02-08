import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { CoffeeContext } from '../../../../contexts/CoffeeContext.tsx'
import { coffees } from '../../../../data/coffees.ts'
import { formatCurrency } from '../../../../utils/formatCurrency.ts'
import { CheckoutCardContainer } from '../../styles.ts'
import { CartItem } from './CartItem'
import { CartItemsWrapper, ConfirmCheckoutButton, PriceArea } from './styles.ts'

export function Resumo() {
    const { cart } = useContext(CoffeeContext)
    const valorEntrega = 3.50

    let totalItems = 0
    let totalEntrega = 0

    cart && Object.keys(cart).forEach((item) => {
        totalItems += coffees[Number(item)].price * cart[Number(item)]
        totalEntrega += valorEntrega * cart[Number(item)]
    })

    return (
        <CheckoutCardContainer hasCustomBorderRadius={true}>
            <CartItemsWrapper>
                {cart && Object.keys(cart).map((cartItem) => {
                    return (
                        <CartItem coffeeItemCart={{[cartItem]: cart[Number(cartItem)]}} />
                    )
                })}
            </CartItemsWrapper>

            <PriceArea>
                <div className="priceInfo">
                    <span>Total de itens</span>
                    <span>{formatCurrency(totalItems)}</span>
                </div>
                <div className="priceInfo">
                    <span>Entrega</span>
                    <span>{formatCurrency(totalEntrega)}</span>
                </div>
                <div className="priceInfo totalArea">
                    <span>Total</span>
                    <span>{formatCurrency(totalItems + totalEntrega)}</span>
                </div>
            </PriceArea>

            <ConfirmCheckoutButton className="confirmCheckout">
                Confirmar Pedido
            </ConfirmCheckoutButton>
        </CheckoutCardContainer>
    )
}