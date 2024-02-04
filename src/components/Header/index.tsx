import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'

import logo from '../../assets/logo.svg'
import { CoffeeContext } from '../../contexts/CoffeeContext.tsx'
import { HeaderContainer, HeaderInfo } from './styles.ts'

export function Header() {
    const theme = useTheme()
    const { cart } = useContext(CoffeeContext)
    const cartLenght = cart ? Object.keys(cart).length : 0

    return (
        <HeaderContainer>
            <div>
                <img src={logo} alt="Logo" draggable={false}/>
            </div>
            <HeaderInfo>
                <div className="headerInfo location">
                    <MapPin weight="fill" size={22} color={theme['purple']} />
                    Porto Alegre, RS
                </div>
                <div className="headerInfo cart">
                    <ShoppingCart weight="fill" size={22}/>
                    {!!cartLenght && (
                        <div className="cartCount">{cartLenght}</div>
                    )}
                </div>
            </HeaderInfo>
        </HeaderContainer>
    )
}