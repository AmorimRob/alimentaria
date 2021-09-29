import styled from "styled-components";
import colors from '../../../../../../styles/colors'

export const Titulo = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: underline;
    color: ${colors.textColor};
`
export const Categoria = styled.p`
    font-size: .75rem;
    color: ${colors.textColor};
`
export const Preco = styled.p`
    font-size: .75rem;
    font-weight: 700;
    color: ${colors.textColor};
`
export const Subtitulo = styled.p`
    font-size: 1rem;
    font-weight: 700;
    color: ${colors.textColor};
`
export const Local = styled.p`
    font-size: .75rem;
    text-decoration: underline;
    color: ${colors.textColor};
`
export const Endereco = styled.p`
    font-size: .75rem;
    color: ${colors.textColor};
`
export const Separador = styled.hr`
    margin-top: .75rem;
    margin-bottom: .75rem;
    width: 9.375rem;
    align-self: center;
`
export const InformacaoProdutoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
`
export const ImagemProdutoContainer = styled.div` 
    width: 12.5rem;
    height: 10.625rem; 
    border-radius: 1.875rem; 
    margin-right: .625rem;
` 

export const ContainerProduto = styled.div`
    display: flex; 
    flex: row; 
    align-items: center;
    margin-top: .5rem;
    margin-bottom: .5rem;
`
export const ImagemProduto = styled.img`
    display: block; 
    margin-left: auto; 
    margin-right: auto; 
    height: 10.625rem;
`