import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import { ICoffee } from '../../../../../../@types/coffee.ts'
import {
    CoffeeImageContainer,
    CoffeeItemContainer,
    CoffeeItemPrice,
    CoffeeItemTypesWrapper,
    CoffeePrice, ItemQuantitySelector
} from './styles.ts'

interface ICoffeeItem {
    coffee: ICoffee
}

export function CoffeeItem({coffee}: ICoffeeItem) {
    const theme = useTheme()

    return (
        <CoffeeItemContainer>
            <CoffeeImageContainer>
                <img src={`/coffees/${coffee.image}.png`} alt="" draggable={false}/>
            </CoffeeImageContainer>

            <CoffeeItemTypesWrapper>
                {coffee.type.map(coffeeType =>
                    <strong>{coffeeType}</strong>
                )}
            </CoffeeItemTypesWrapper>

            <h3>{coffee.title}</h3>

            <span className="coffeeSubtitle">{coffee.description}</span>

            <CoffeeItemPrice>
                <CoffeePrice>
                    <span className="pricePrefix">
                        R$
                    </span>
                    <span className="price">
                        {coffee.price}
                    </span>
                </CoffeePrice>

                <div className="qtdSelectorBuy">
                    <ItemQuantitySelector>
                        <Minus size={14} color={theme['purple']} />
                        <span>1</span>
                        <Plus size={14} color={theme['purple']} />
                    </ItemQuantitySelector>

                    <button>
                        <ShoppingCart color="#fff" weight="fill" size={22} />
                    </button>
                </div>
            </CoffeeItemPrice>
        </CoffeeItemContainer>
    )
}