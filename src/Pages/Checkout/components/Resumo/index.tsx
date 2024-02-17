import { useContext } from 'react'
import { FieldErrors } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import { IAdress } from '../../../../contexts/AdressContext.tsx'
import { CoffeeContext } from '../../../../contexts/CoffeeContext.tsx'
import { PaymentContext } from '../../../../contexts/PaymentContext.tsx'
import { coffees } from '../../../../data/coffees.ts'
import { formatCurrency } from '../../../../utils/formatCurrency.ts'
import { CheckoutCardContainer } from '../../styles.ts'
import { CartItem } from './CartItem'
import { CartItemsWrapper, ConfirmCheckoutButton, PriceArea } from './styles.ts'

interface ResumoProps {
    errors: FieldErrors<IAdress>
    setIsCheckoutDone: any
}

export function Resumo({ errors, setIsCheckoutDone }: ResumoProps) {
    const { selectedPaymentOption } = useContext(PaymentContext)
    const { cart } = useContext(CoffeeContext)

    const navigate = useNavigate()
    const hasInvalidFields = Boolean(selectedPaymentOption == null || Object.keys(errors).length)
    const valorEntrega = 3.50


    let totalItems = 0
    let totalEntrega = 0

    cart && Object.keys(cart).forEach((item) => {
        totalItems += coffees[Number(item)].price * cart[Number(item)]
        totalEntrega += valorEntrega * cart[Number(item)]
    })

    function validateCheckout() {
        if (hasInvalidFields) {
            toast.error('Alguns campos obrigatórios não foram preenchidos')
        } else {
            setIsCheckoutDone(true)
            navigate('/checkout/done')
        }
    }

    return (
        <CheckoutCardContainer hasCustomBorderRadius={true}>
            <CartItemsWrapper>
                {cart && Object.keys(cart).map((cartItem) => (
                    <CartItem key={cartItem} coffeeItemCart={{[cartItem]: cart[Number(cartItem)]}} />
                ))}
            </CartItemsWrapper>

            <PriceArea>
                <div className="priceInfo">
                    <span>Total de itens</span>
                    <span>{formatCurrency(totalItems)}</span>
                </div>
                <div className="priceInfo">
                    <span>Entrega</span>
                    <span>{formatCurrency(totalEntrega)}</span>
                </div>
                <div className="priceInfo totalArea">
                    <span>Total</span>
                    <span>{formatCurrency(totalItems + totalEntrega)}</span>
                </div>
            </PriceArea>

            <ConfirmCheckoutButton
                type="submit"
                className="confirmCheckout"
                onClick={validateCheckout}
            >
                Confirmar Pedido
            </ConfirmCheckoutButton>
        </CheckoutCardContainer>
    )
}