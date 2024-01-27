import { ICoffee } from '../../../../@types/coffee.ts'
import { coffees } from '../../../../data/coffees.ts'
import { CoffeeItem } from './components/CoffeeItem'
import { CoffeeListContainer } from './styles.ts'

export function CoffeeList() {
    return (

        <CoffeeListContainer>
            <h2>Nossos cafés</h2>

            <div className="coffeeList">
                {coffees.map((coffee: ICoffee) =>
                    <CoffeeItem key={coffee.id} coffee={coffee} />
                )}
            </div>
        </CoffeeListContainer>
    )
}