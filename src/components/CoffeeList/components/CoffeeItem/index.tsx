import { CoffeeItemContainer, CoffeeItemPrice } from './styles.ts';
import { ICoffee } from '../../../../@types/coffee';
import { ShoppingCart } from '@phosphor-icons/react';

interface ICoffeeItem {
    coffee: ICoffee
}

export function CoffeeItem({coffee}: ICoffeeItem) {
    return (
        <CoffeeItemContainer>
            <img src={coffee.image} alt=''/>
            <span>{coffee.type}</span>
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
                    <ShoppingCart weight='fill' />
                </button>
            </CoffeeItemPrice>
        </CoffeeItemContainer>
    )
}