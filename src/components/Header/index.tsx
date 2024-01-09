import logo from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { HeaderContainer, HeaderInfo } from './styles.ts';

export function Header() {
    return (
        <HeaderContainer>
            <div>
                <img src={logo} alt='Logo'/>
            </div>
            <HeaderInfo>
                <div className='headerInfo location'>
                    <MapPin weight="fill" size={22} color='#8047F8' />
                    Porto Alegre, RS
                </div>
                <div className='headerInfo cart'>
                    <ShoppingCart weight="fill" size={22}/>
                </div>
            </HeaderInfo>
        </HeaderContainer>
    )
}