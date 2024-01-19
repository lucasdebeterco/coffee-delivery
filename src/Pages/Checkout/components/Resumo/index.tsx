import { CheckoutCardContainer } from '../../styles.ts'
import { CartItem } from './CartItem'
import { CartItemsWrapper, PriceArea } from './styles.ts'

export function Resumo() {
    return (
        <CheckoutCardContainer>
            <CartItemsWrapper>
                <CartItem />
                <CartItem />
                <CartItem />
            </CartItemsWrapper>

            <PriceArea>
                <div className="priceInfo">
                    <span>Total de itens</span>
                    <strong>R$ 29,70</strong>
                </div>
                <div className="priceInfo">
                    <span>Entrega</span>
                    <strong>R$ 3,50</strong>
                </div>
                <div className="priceInfo totalArea">
                    <span>Total</span>
                    <strong>R$ 33,20</strong>
                </div>
            </PriceArea>

            <button>Confirmar Pedido</button>
        </CheckoutCardContainer>
    )
}