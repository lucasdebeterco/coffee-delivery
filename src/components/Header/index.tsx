import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
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
            <NavLink to="/" title="Home">
                <img src={logo} alt="Logo" draggable={false}/>
            </NavLink>
            <HeaderInfo>
                <div className="headerInfo location">
                    <MapPin weight="fill" size={22} color={theme['purple']} />
                    Porto Alegre, RS
                </div>
                <NavLink to="/checkout" className="headerInfo cart" title="Cart">
                    <ShoppingCart weight="fill" size={22}/>
                    {!!cartLenght && (
                        <div className="cartCount">{cartLenght}</div>
                    )}
                </NavLink>
            </HeaderInfo>
        </HeaderContainer>
    )
}