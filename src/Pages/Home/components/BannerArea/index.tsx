import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import BannerImage from '../../../../assets/banner.svg'
import { BannerAreaContainer, BenefitItem, BenefitsWrapper } from './styles.ts'

export function BannerArea() {
    return (
        <BannerAreaContainer>
            <div>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <span
                    className="subTitle">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>

                <BenefitsWrapper>
                    <BenefitItem color="yellow-dark">
                        <div className="benefitImage">
                            <ShoppingCart color="#fff" weight="fill"/>
                        </div>
                        Compra simples e segura
                    </BenefitItem>
                    <BenefitItem color="base-text">
                        <div className="benefitImage">
                            <Package color="#fff" weight="fill"/>
                        </div>
                        Embalagem mantém o café intacto
                    </BenefitItem>
                    <BenefitItem color="yellow">
                        <div className="benefitImage">
                            <Timer color="#fff" weight="fill"/>
                        </div>
                        Entrega rápida e rastreada
                    </BenefitItem>
                    <BenefitItem color="purple">
                        <div className="benefitImage">
                            <Coffee color="#fff" weight="fill"/>
                        </div>
                        O café chega fresquinho até você
                    </BenefitItem>
                </BenefitsWrapper>
            </div>

            <div>
                <img src={BannerImage} alt="Coffee cup banner" draggable={false}/>
            </div>
        </BannerAreaContainer>
    )
}