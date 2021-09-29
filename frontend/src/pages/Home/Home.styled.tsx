import styled from 'styled-components';
import colors from '../../styles/colors'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    background-color: white;
    border-radius: 3.125rem;
    padding-left: 6.25rem;
    padding-right: 6.25rem;
    padding-bottom: 1.25rem;
    margin-bottom: 3.125rem;
`

export const BoasVindas = styled.p`
    font-size: 2rem;
    color: ${colors.textColor};
    align-self: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
`