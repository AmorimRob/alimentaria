import styled from 'styled-components'
import colors from '../../styles/colors'

interface Props {
    selecionado: boolean;
}

export const FiltroItem = styled.div<Props>`
    border: 1px solid ${colors.primaryColor};
    color: ${colors.primaryColor};;
    padding: .625rem;
    border-radius: 2.188rem;
    cursor: pointer;
    margin: .625rem;

    ${({ selecionado }) => selecionado && `
        background-color: ${colors.primaryColor};;
        color: white;
  `}
`

export const Label = styled.p`
    font-size: .8rem;
`