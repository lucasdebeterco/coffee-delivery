import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { useContext, useState } from 'react'
import { useTheme } from 'styled-components'

import { ICoffee } from '../../../../../../@types/coffee.ts'
import { CoffeeContext } from '../../../../../../contexts/CoffeeContext.tsx'
import {
    CoffeeImageContainer,
    CoffeeItemContainer,
    CoffeeItemPrice,
    CoffeeItemTypesWrapper,
    CoffeePrice, ItemQuantitySelector
} from './styles.ts'

interface ICoffeeItem {
    coffee: ICoffee
    coffeeItemQtd: number
}

export function CoffeeItem({coffee, coffeeItemQtd}: ICoffeeItem) {
    const theme = useTheme()
    const { setCartItems } = useContext(CoffeeContext)
    const [itemQtd, setItemQtd] = useState(coffeeItemQtd)

    function handleChangeQuantity(qtd: number) {
        setItemQtd((prevState) => {
            return prevState + qtd <= 1 ? 1 : prevState + qtd
        })
    }

    function handleAddCart() {
        setCartItems(coffee.id, itemQtd)
    }

    return (
        <CoffeeItemContainer>
            <CoffeeImageContainer>
                <img src={`/coffees/${coffee.image}.png`} alt="" draggable={false}/>
            </CoffeeImageContainer>

            <CoffeeItemTypesWrapper>
                {coffee.type.map(coffeeType =>
                    <strong key={coffeeType}>{coffeeType}</strong>
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
                        <Minus
                            size={14}
                            color={theme['purple']}
                            onClick={() => handleChangeQuantity(-1)}
                        />
                        <span>{itemQtd}</span>
                        <Plus
                            size={14}
                            color={theme['purple']}
                            onClick={() => handleChangeQuantity(1)}
                        />
                    </ItemQuantitySelector>

                    <button onClick={handleAddCart}>
                        <ShoppingCart color="#fff" weight="fill" size={22} />
                    </button>
                </div>
            </CoffeeItemPrice>
        </CoffeeItemContainer>
    )
}