import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'

import { CoffeeContext, ICart } from '../../../../../contexts/CoffeeContext.tsx'
import { coffees } from '../../../../../data/coffees.ts'
import { formatCurrency } from '../../../../../utils/formatCurrency.ts'
import { ActionsAreaWrapper, CartItemContainer, ItemDataWrapper } from './styles.ts'

interface CartItemProps {
    coffeeItemCart: ICart
}

export function CartItem({coffeeItemCart}: CartItemProps) {
    const theme = useTheme()
    const { removeCartItem, changeCartItemQuantity } = useContext(CoffeeContext)
    const coffeeItemData = coffees[Number(Object.keys(coffeeItemCart))]

    return (
        <CartItemContainer>
            <ItemDataWrapper>
                <img src={`/coffees/${coffeeItemData.image}.png`} alt=""/>

                <div className="titleActionsArea">
                    <span className="itemTitle">{coffeeItemData.title}</span>

                    <ActionsAreaWrapper>
                        <div className="quantityArea">
                            <Minus
                                size={14}
                                color={theme['purple']}
                                onClick={() => changeCartItemQuantity(coffeeItemData.id, -1)}
                            />
                            <span>{Number(Object.values(coffeeItemCart))}</span>
                            <Plus
                                size={14}
                                color={theme['purple']}
                                onClick={() => changeCartItemQuantity(coffeeItemData.id, 1)}
                            />
                        </div>

                        <button onClick={() => removeCartItem(coffeeItemData.id)}>
                            <Trash size={16} color={theme['purple']}/>
                            <span>Remover</span>
                        </button>
                    </ActionsAreaWrapper>
                </div>
            </ItemDataWrapper>


            <strong className="priceItem">{formatCurrency(coffeeItemData.price * Number(Object.values(coffeeItemCart)))}</strong>
        </CartItemContainer>
    )
}