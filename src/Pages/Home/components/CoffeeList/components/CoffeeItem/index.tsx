import { ShoppingCart } from '@phosphor-icons/react'

import { ICoffee } from '../../../../../../@types/coffee.ts'
import { CoffeeItemContainer, CoffeeItemPrice, CoffeeItemTypesWrapper } from './styles.ts'

interface ICoffeeItem {
    coffee: ICoffee
}

export function CoffeeItem({coffee}: ICoffeeItem) {
    return (
        <CoffeeItemContainer>
            <img src={`/coffees/${coffee.image}.png`} alt=""/>

            <CoffeeItemTypesWrapper>
                {coffee.type.map(coffeeType =>
                    <span>{coffeeType}</span>
                )}
            </CoffeeItemTypesWrapper>

            <span>{coffee.title}</span>
            <span>{coffee.description}</span>

            <CoffeeItemPrice>
                <span>{coffee.price}</span>
                <div>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
                <button>
                    <ShoppingCart weight="fill" />
                </button>
            </CoffeeItemPrice>
        </CoffeeItemContainer>
    )
}