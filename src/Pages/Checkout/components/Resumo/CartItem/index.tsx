import { Trash } from '@phosphor-icons/react'

import { CartItemContainer } from './styles.ts'

export function CartItem() {
    return (
        <CartItemContainer>
            <img src={''} />

            <div>
                <span>Expresso Tradicional</span>
                <div>
                    <button>+</button>
                    <span>1</span>
                    <button>-</button>
                </div>

                <button><Trash />Remover</button>
            </div>

            <strong>RS 9,90</strong>
        </CartItemContainer>
    )
}