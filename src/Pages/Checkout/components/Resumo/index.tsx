import { CheckoutCardContainer } from '../../styles.ts'
import { CartItem } from './CartItem'
import { CartItemsWrapper, ConfirmCheckoutButton, PriceArea } from './styles.ts'

export function Resumo() {
    return (
        <CheckoutCardContainer hasCustomBorderRadius={true}>
            <CartItemsWrapper>
                <CartItem />
                <CartItem />
                <CartItem />
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