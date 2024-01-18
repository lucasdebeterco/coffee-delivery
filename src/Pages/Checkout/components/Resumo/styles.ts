import styled from 'styled-components'

export const ResumoContainer = styled.div`
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