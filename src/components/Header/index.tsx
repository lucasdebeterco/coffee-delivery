import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import logo from '../../assets/logo.svg'
import { HeaderContainer, HeaderInfo } from './styles.ts'

export function Header() {
    const theme = useTheme()

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
                </div>
            </HeaderInfo>
        </HeaderContainer>
    )
}