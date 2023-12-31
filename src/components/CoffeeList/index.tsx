import { CoffeeListContainer } from './styles.ts'
import { coffees } from '../../data/coffees.ts';
import { CoffeeItem } from './components/CoffeeItem';
import { ICoffee } from '../../@types/coffee';

export function CoffeeList() {
    return (

        <CoffeeListContainer>
            <h3>Nossos cafés</h3>

            <div className='coffeeList'>
                {coffees.map((coffee: ICoffee) => {
                    return (
                        <CoffeeItem key={coffee.id} coffee={coffee} />
                    )
                })}
            </div>
        </CoffeeListContainer>
    )
}