import React from 'react'
import * as S from './ProdutoItem.styled'
import { Produto } from '../../ResultadoPesquisa.types'

const ProdutoItem = (produto: Produto ) => {
    return <S.ContainerProduto>
    <S.ImagemProdutoContainer>
        <a href="https://docepreco.com.br/" target="_blank">
            <S.ImagemProduto src={produto.imagem} alt="leite"/>
        </a>
    </S.ImagemProdutoContainer>
    <S.InformacaoProdutoContainer>
        <a href="https://docepreco.com.br/" target="_blank">
            <S.Titulo>{produto.titulo}</S.Titulo>
        </a>
        <S.Categoria>{produto.categoria}</S.Categoria>
        <S.Preco>{produto.preco}</S.Preco>
        <S.Separador />
        <S.Subtitulo>Onde encontrar?</S.Subtitulo>
        <a href="https://docepreco.com.br/" target="_blank">
            <S.Local>{produto.local}</S.Local>
        </a>
        <S.Endereco>{produto.endereco}</S.Endereco>
    </S.InformacaoProdutoContainer>
</S.ContainerProduto>
}

export default ProdutoItem;