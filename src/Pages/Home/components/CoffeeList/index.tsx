import { useContext } from 'react'

import { ICoffee } from '../../../../@types/coffee.ts'
import { CoffeeContext } from '../../../../contexts/CoffeeContext.tsx'
import { coffees } from '../../../../data/coffees.ts'
import { CoffeeItem } from './components/CoffeeItem'
import { CoffeeListContainer } from './styles.ts'

export function CoffeeList() {
    const { cart } = useContext(CoffeeContext)

    return (
        <CoffeeListContainer>
            <h2>Nossos cafés</h2>

            <div className="coffeeList">
                {coffees.map((coffee: ICoffee) => (
                    <CoffeeItem
                        key={coffee.id}
                        coffee={coffee}
                        coffeeItemQtd={(cart && cart[coffee.id]) ? cart[coffee.id] : 1}
                    />
                ))}
            </div>
        </CoffeeListContainer>
    )
}