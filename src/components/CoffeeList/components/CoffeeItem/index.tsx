import { CoffeeItemContainer } from './styles.ts';
import { ICoffee } from '../../../../@types/coffee';

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
            <span>{coffee.price}</span>
        </CoffeeItemContainer>
    )
}