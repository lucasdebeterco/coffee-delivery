import { EnderecoEntregaContainer, EnderecoFormArea } from './styles.ts';
import { MapPinLine } from '@phosphor-icons/react';

export function EnderecoEntrega() {
    return (
        <EnderecoEntregaContainer>
            <div>
                <MapPinLine size={22} color='#C47F17' />
                <div>
                    <strong>Endereço de Entrega</strong>
                    <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
            </div>
            <EnderecoFormArea>
                <input placeholder='CEP'/>
                <input placeholder='Rua'/>
                <input placeholder='Número'/>
                <input placeholder='Complemento'/>
                <input placeholder='Bairro'/>
                <input placeholder='Cidade'/>
                <input placeholder='UF'/>
            </EnderecoFormArea>
        </EnderecoEntregaContainer>
    )
}