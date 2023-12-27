import logo from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { HeaderContainer } from './styles.ts';

export function Header() {
    return (
        <HeaderContainer>
            <div>
                <img src={logo} alt='Logo'/>
            </div>
            <div>
                <div>
                    <MapPin/>
                    Porto Alegre, RS
                </div>
                <div className='cart'>
                    <ShoppingCart/>
                </div>
            </div>
        </HeaderContainer>
    )
}