import { useContext } from 'react'

import { CoffeeContext } from '../../../../contexts/CoffeeContext.tsx'
import { CheckoutCardContainer } from '../../styles.ts'
import { CartItem } from './CartItem'
import { CartItemsWrapper, ConfirmCheckoutButton, PriceArea } from './styles.ts'

export function Resumo() {
    const { cart } = useContext(CoffeeContext)

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
                    <span>R$ 29,70</span>
                </div>
                <div className="priceInfo">
                    <span>Entrega</span>
                    <span>R$ 3,50</span>
                </div>
                <div className="priceInfo totalArea">
                    <span>Total</span>
                    <span>R$ 33,20</span>
                </div>
            </PriceArea>

            <ConfirmCheckoutButton className="confirmCheckout">
                Confirmar Pedido
            </ConfirmCheckoutButton>
        </CheckoutCardContainer>
    )
}