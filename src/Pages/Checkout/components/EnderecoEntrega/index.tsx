import { MapPinLine } from '@phosphor-icons/react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { useTheme } from 'styled-components'

import { IAdress } from '../../../../contexts/AdressContext.tsx'
import { CheckoutCardContainer } from '../../styles.ts'
import { CheckoutCardHeader } from '../CheckoutCardHeader'
import { EnderecoFormArea } from './styles.ts'

interface IEnderecoEntrega {
    errors: FieldErrors<IAdress>
    register: UseFormRegister<IAdress>
}

export function EnderecoEntrega({errors, register}: IEnderecoEntrega) {
    const theme = useTheme()

    return (
        <CheckoutCardContainer>
            <CheckoutCardHeader
                icon={<MapPinLine size={22} color={theme['yellow-dark']} />}
                title="Endereço de Entrega"
                subtitle="Informe o endereço onde deseja receber seu pedido"
            />

            <EnderecoFormArea>
                <input
                    id="cep"
                    placeholder="CEP"
                    className={errors.cep ? 'invalid' : ''}
                    {...register('cep',  {required: true})}
                />
                <input
                    id="rua"
                    placeholder="Rua"
                    className={errors.rua ? 'invalid' : ''}
                    {...register('rua', {required: true})}
                />
                <input
                    id="numero"
                    placeholder="Número"
                    className={errors.numero ? 'invalid' : ''}
                    {...register('numero', {required: true})}
                />
                <input
                    id="complemento"
                    placeholder="Complemento"
                    className={errors.complemento ? 'invalid' : ''}
                    {...register('complemento', {required: true})}
                />
                <input
                    id="bairro"
                    placeholder="Bairro"
                    className={errors.bairro ? 'invalid' : ''}
                    {...register('bairro', {required: true})}
                />
                <input
                    id="cidade"
                    placeholder="Cidade"
                    className={errors.cidade ? 'invalid' : ''}
                    {...register('cidade', {required: true})}
                />
                <input
                    id="uf"
                    placeholder="UF"
                    className={errors.uf ? 'invalid' : ''}
                    {...register('uf', {required: true})}
                />
            </EnderecoFormArea>
        </CheckoutCardContainer>
    )
}