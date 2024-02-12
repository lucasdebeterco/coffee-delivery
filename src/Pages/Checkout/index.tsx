import { useContext } from 'react'
import { useForm } from 'react-hook-form'

import { AdressContext, IAdress } from '../../contexts/AdressContext.tsx'
import { EnderecoEntrega } from './components/EnderecoEntrega'
import { Pagamento } from './components/Pagamento'
import { Resumo } from './components/Resumo'
import { CheckoutContainer, CheckoutSection, SectionTitle } from './styles.ts'

export function Checkout() {
    const { handleSetAdress } = useContext(AdressContext)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IAdress>()

    function onSubmit(data: IAdress) {
        handleSetAdress(data)
    }

    return (
        <CheckoutContainer onSubmit={handleSubmit(onSubmit)}>
            <CheckoutSection>
                <SectionTitle>Complete seu pedido</SectionTitle>
                <EnderecoEntrega
                    register={register}
                    errors={errors}
                />
                <Pagamento/>
            </CheckoutSection>

            <CheckoutSection>
                <SectionTitle>Cafés selecionados</SectionTitle>
                <Resumo errors={errors} />
            </CheckoutSection>
        </CheckoutContainer>
    )
}