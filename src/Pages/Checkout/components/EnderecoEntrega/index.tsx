import { MapPinLine } from '@phosphor-icons/react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'

import { AdressContext, IAdress } from '../../../../contexts/AdressContext.tsx'
import { CheckoutCardContainer } from '../../styles.ts'
import { CheckoutCardHeader } from '../CheckoutCardHeader'
import { EnderecoFormArea } from './styles.ts'

export function EnderecoEntrega() {
    const theme = useTheme()
    const { handleSetAdress } = useContext(AdressContext)

    const {
        register,
        handleSubmit
    } = useForm<IAdress>()

    function onSubmit(data: IAdress) {
        handleSetAdress(data)
    }

    return (
        <CheckoutCardContainer>
            <CheckoutCardHeader
                icon={<MapPinLine size={22} color={theme['yellow-dark']} />}
                title="Endereço de Entrega"
                subtitle="Informe o endereço onde deseja receber seu pedido"
            />

            <EnderecoFormArea onSubmit={handleSubmit(onSubmit)}>
                <input
                    id="cep"
                    placeholder="CEP"
                    {...register('cep')}
                />
                <input
                    id="rua"
                    placeholder="Rua"
                    {...register('rua')}
                />
                <input
                    id="numero"
                    placeholder="Número"
                    {...register('numero')}
                />
                <input
                    id="complemento"
                    placeholder="Complemento"
                    {...register('complemento')}
                />
                <input
                    id="bairro"
                    placeholder="Bairro"
                    {...register('bairro')}
                />
                <input
                    id="cidade"
                    placeholder="Cidade"
                    {...register('cidade')}
                />
                <input
                    id="uf"
                    placeholder="UF"
                    {...register('uf')}
                />

                <input type="submit" />
            </EnderecoFormArea>
        </CheckoutCardContainer>
    )
}