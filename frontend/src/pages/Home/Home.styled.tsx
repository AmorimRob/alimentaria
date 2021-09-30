import styled from 'styled-components';
import colors from '../../styles/colors'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    background: linear-gradient(white, whitesmoke);
    border-radius: 3.125rem;
    padding-bottom: 1.25rem;
    margin-bottom: 3.125rem;
    width: 90%;
    min-height: 700px;
`

export const ContainerPesqusia = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    justify-content: flex-start;
    align-items: center;
`

export const BoasVindas = styled.p`
    font-size: 2rem;
    color: ${colors.textColor};
    align-self: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
`
export const Menu = styled.div`
    display: flex; 
    margin-top: 50px; 
    margin-bottom: 110px; 
    flex-direction: column; 
    margin-left: 50px;
`

export const Logo = styled.img`
    align-self: center; 
    margin-bottom: 150px; 
    width: 60px; 
    height: 70px;
`

export const MenuItensContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    align-self: center;
    width: 100px;
    align-items: center;
`