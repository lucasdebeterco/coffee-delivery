import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import BannerImage from '../../../../assets/banner.svg'
import { BannerAreaContainer, BenefitsWrapper } from './styles.ts'

export function BannerArea() {
    return (
        <BannerAreaContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>

            <BenefitsWrapper>
                <div>
                    <ShoppingCart weight="fill" />
                    Compra simples e segura
                </div>
                <div>
                    <Package weight="fill" />
                    Embalagem mantém o café intacto
                </div>
                <div>
                    <Timer weight="fill" />
                    Entrega rápida e rastreada
                </div>
                <div>
                    <Coffee weight="fill" />
                    O café chega fresquinho até você
                </div>
            </BenefitsWrapper>
            <div>
                <img src={BannerImage} alt="Coffee cup banner"/>
            </div>
        </BannerAreaContainer>
    )
}