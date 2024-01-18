import styled from 'styled-components'

export const EnderecoEntregaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;
    
    border-radius: 6px;
    background: ${(props) => props.theme['base-card']};

    strong {
        color: ${(props) => props.theme['base-subtitle']};
    }
`

export const EnderecoFormArea = styled.form`
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 
            'cep none none none'
            'rua rua rua rua'
            'numero complemento complemento complemento'
            'bairro cidade cidade uf';
    
    input {
        padding: 12px;
        align-items: center;
        font-size: 0.875rem;
        
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme['base-button']};
        background: ${(props) => props.theme['base-input']};
        color: ${(props) => props.theme['base-label']};

        &#cep {grid-area: cep;}
        &#rua {grid-area: rua;}
        &#numero {grid-area: numero;}
        &#complemento {grid-area: complemento;}
        &#bairro {grid-area: bairro;}
        &#cidade {grid-area: cidade;}
        &#uf {grid-area: uf;}
    }
`