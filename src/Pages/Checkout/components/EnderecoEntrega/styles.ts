import styled from 'styled-components';

export const EnderecoEntregaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;
    
    border-radius: 6px;
    background: ${(props) => props.theme['base-card']};
`

export const EnderecoFormArea = styled.form`
    display: grid;
    
    input {
        display: flex;
        padding: 12px;
        align-items: center;
        font-size: 0.875rem;
        
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme['base-button']};
        background: ${(props) => props.theme['base-input']};
        color: ${(props) => props.theme['base-label']};
    }
`