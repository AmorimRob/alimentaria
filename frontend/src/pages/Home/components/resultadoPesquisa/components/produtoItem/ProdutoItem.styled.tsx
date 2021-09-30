import styled from "styled-components";
import colors from '../../../../../../styles/colors'

export const Titulo = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    color: ${colors.textColor};
`
export const TextoPequeno = styled.p`
    font-size: .65rem;
    color: ${colors.textColor};
`
export const Preco = styled.p`
    font-size: 1.8rem;
    color: ${colors.textColor};
`

export const Unidade = styled.p`
    font-size: .75rem;
    color: ${colors.textColor};
    padding-bottom: 10px;
`

export const Subtitulo = styled.p`
    font-size: 1rem;
    color: ${colors.textColor};
`

export const TextoMedio = styled.p`
    font-size: .75rem;
    color: ${colors.textColor};
`

export const InformacaoProdutoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    height: 100%;
    justify-content: space-around; 
`
export const ImagemProdutoContainer = styled.div` 
    width: 150px;
    height: 10.625rem; 
    border-radius: 1rem; 
    margin-right: .625rem;
    background-color: #bbe6fc;
    margin-top: 5px;
    margin-left: 5px;
    margin-bottom: 5px;
` 

export const ImagemProduto = styled.img`
    display: block; 
    height: 10.625rem; 
    border-radius: 10px;

`

export const ContainerProduto = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-between;
    align-items: center;
    margin-top: .5rem;
    margin-bottom: .5rem;
    width: 550px; 
    background-color: white;
    border-radius: 20px;
`

export const BotaoLink = styled.div`
    width: 70px;
    margin-left: 40px;
    margin-right: 15px; 
    height: 60px;
    border-radius: 15px;
    background-color: #bbe6fc; 
    display: flex;
    justify-content: center; 
    align-items: center;
`

export const ContainerHorizontalCentralizado = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
`

export const ContainerPreco = styled.div`
    display: flex; 
    flex-direction: row; 
    align-items: end;
`

export const ContainerHorizontal = styled.div`
    display: flex;
    flex-direction: row
`