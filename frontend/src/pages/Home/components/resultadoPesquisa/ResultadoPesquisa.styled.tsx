import styled from 'styled-components'
import colors from '../../../../styles/colors'

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 1.25rem;
    margin-top: 1.25rem;
`

export const Paginacao = styled.div`
    display: flex; 
    flex-direction: row;
`

export const PaginacaoItem = styled.div`
    margin-left: .625rem;
    color: ${colors.primaryColor};
    font-size: 1rem;
`

export const ContadorResultados = styled.p`
    font-size: 1rem;
    margin-bottom: 1.25rem;
    margin-top: 1.25rem;
    font-weight: 800;
    color: ${colors.textColor};
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 70%;
`