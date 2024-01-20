import { Minus, Plus, Trash } from '@phosphor-icons/react'

import { ActionsAreaWrapper, CartItemContainer, ItemDataWrapper } from './styles.ts'

export function CartItem() {
    return (
        <CartItemContainer>
            <ItemDataWrapper>
                <img src="/coffees/cafe-com-leite.png" alt=""/>

                <div className="titleActionsArea">
                    <span className="itemTitle">Expresso Tradicional</span>

                    <ActionsAreaWrapper>
                        <div className="quantityArea">
                            <Plus size={14} color="#8047F8"/>
                            <span>1</span>
                            <Minus size={14} color="#8047F8"/>
                        </div>

                        <button>
                            <Trash size={16} color="#8047F8"/>
                            <span>Remover</span>
                        </button>
                    </ActionsAreaWrapper>
                </div>
            </ItemDataWrapper>


            <strong className="priceItem">RS 9,90</strong>
        </CartItemContainer>
    )
}